<?php
// level2_api.php
require __DIR__ . "/../../auth/config.php";
require __DIR__ . "/../../auth/helpers.php";

header('Content-Type: application/json; charset=UTF-8');

if (!is_logged_in()) {
  echo json_encode(['success' => false, 'error' => 'not_logged_in']);
  exit;
}

$user = current_user();
$user_id = intval($user['id']);

$action = $_REQUEST['action'] ?? '';

try {
  if ($action === 'get_progress') {
    $stmt = $pdo->prepare("SELECT progress, awards, exp FROM users WHERE id = ?");
    $stmt->execute([$user_id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $progress = null;
    if (!empty($row['progress'])) {
      $decoded = json_decode($row['progress'], true);
      if (json_last_error() === JSON_ERROR_NONE) $progress = $decoded;
    }
    $awards = [];
    if (!empty($row['awards'])) {
      $decoded = json_decode($row['awards'], true);
      if (json_last_error() === JSON_ERROR_NONE) $awards = $decoded;
    }
    $exp = isset($row['exp']) ? intval($row['exp']) : 0;

    echo json_encode(['success' => true, 'progress' => $progress, 'awards' => $awards, 'exp' => $exp]);
    exit;
  }

  if ($action === 'save_progress') {
    // expects POST 'progress' as JSON string
    $raw = $_POST['progress'] ?? null;
    if ($raw === null) {
      echo json_encode(['success' => false, 'error' => 'missing_progress']);
      exit;
    }
    $decoded = json_decode($raw, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
      echo json_encode(['success' => false, 'error' => 'invalid_json']);
      exit;
    }
    // Save as JSON text
    $stmt = $pdo->prepare("UPDATE users SET progress = ? WHERE id = ?");
    $ok = $stmt->execute([json_encode($decoded), $user_id]);
    echo json_encode(['success' => (bool)$ok]);
    exit;
  }

  if ($action === 'grant_exp') {
    $award_key = $_POST['award_key'] ?? '';
    $amount = intval($_POST['amount'] ?? 0);
    if (empty($award_key) || $amount <= 0) {
      echo json_encode(['success' => false, 'error' => 'missing_award_key_or_amount']);
      exit;
    }

    // fetch current awards & exp
    $stmt = $pdo->prepare("SELECT awards, exp FROM users WHERE id = ?");
    $stmt->execute([$user_id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $awards = [];
    if (!empty($row['awards'])) {
      $decoded = json_decode($row['awards'], true);
      if (json_last_error() === JSON_ERROR_NONE) $awards = $decoded;
    }
    $currentExp = isset($row['exp']) ? intval($row['exp']) : 0;

    // if already awarded -> return not awarded
    if (in_array($award_key, $awards, true)) {
      echo json_encode(['success' => true, 'awarded' => false, 'message' => 'already_awarded', 'exp' => $currentExp]);
      exit;
    }

    // append award key and increase exp (atomic-ish single query with transaction)
    $awards[] = $award_key;
    $newExp = $currentExp + $amount;

    $pdo->beginTransaction();
    $stmt = $pdo->prepare("UPDATE users SET exp = ?, awards = ? WHERE id = ?");
    $ok = $stmt->execute([$newExp, json_encode($awards), $user_id]);
    if ($ok) {
      $pdo->commit();
      echo json_encode(['success' => true, 'awarded' => true, 'exp' => $newExp]);
      exit;
    } else {
      $pdo->rollBack();
      echo json_encode(['success' => false, 'awarded' => false, 'error' => 'db_update_failed']);
      exit;
    }
  }

  echo json_encode(['success' => false, 'error' => 'invalid_action']);
  exit;
} catch (Exception $e) {
  // hide sensitive details in production, but useful for dev
  error_log("level2_api error: " . $e->getMessage());
  echo json_encode(['success' => false, 'error' => 'exception', 'message' => $e->getMessage()]);
  exit;
}
