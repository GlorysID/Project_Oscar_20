document.addEventListener("DOMContentLoaded", function () {
  // === DOM Elements ===
  const avatarEditIcon = document.getElementById("avatarEditIcon");
  const avatarEditHover = document.getElementById("avatarEditHover");
  const avatarImg = document.getElementById("avatarImg");
  const avatarInput = document.getElementById("avatarInput");

  const avatarCropDelete = document.getElementById("avatarCropDelete");
  const avatarCropModal = document.getElementById("avatarCropModal");
  const avatarCropPreview = document.getElementById("avatarCropPreview");
  const avatarCropClose = document.getElementById("avatarCropClose");
  const avatarCropCancel = document.getElementById("avatarCropCancel");
  const avatarCropApply = document.getElementById("avatarCropApply");
  const avatarZoom = document.getElementById("avatarZoom");

  // Nama & Username di kiri
  const avatarName = document.getElementById("avatarName");
  const avatarUsername = document.getElementById("avatarUsername");

  // Form Edit Profile
  const editProfileBtn = document.getElementById("editProfileBtn");
  const profileEditPanel = document.getElementById("profileEditPanel");
  const cancelEditProfile = document.getElementById("cancelEditProfile");
  const editNameInput = document.getElementById("editName");
  const editUsernameInput = document.getElementById("editUsername");
  const editEmailInput = document.getElementById("editEmail");
  const editPasswordInput = document.getElementById("editPassword");

  // Inisialisasi input untuk update info avatar
  const nameInput = editNameInput;
  const usernameInput = editUsernameInput;

  // === Avatar Crop State ===
  let cropImg = null;
  let cropZoom = 1;
  let cropOffset = { x: 0, y: 0 }; // posisi drag
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let imgOffsetStart = { x: 0, y: 0 };

  // Set default avatar

  // === Avatar Crop Modal Logic ===
  avatarInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;
    if (
      !["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
      file.size > 1024 * 1024
    ) {
      alert("Format harus JPG/PNG/WebP dan ukuran ≤ 1 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      cropImg = new Image();
      cropImg.src = e.target.result;
      cropImg.onload = function () {
        cropZoom = 1;
        cropOffset = { x: 0, y: 0 };
        renderCropPreview();
        avatarCropModal.classList.add("active");
      };
    };
    reader.readAsDataURL(file);
  });

  avatarZoom.addEventListener("input", function () {
    cropZoom = parseFloat(this.value);
    renderCropPreview();
  });

  // === Drag to Move Crop ===
  avatarCropPreview.addEventListener("mousedown", function (e) {
    if (!cropImg) return;
    isDragging = true;
    dragStart = { x: e.clientX, y: e.clientY };
    imgOffsetStart = { ...cropOffset };
    avatarCropPreview.style.cursor = "grabbing";
  });
  window.addEventListener("mousemove", function (e) {
    if (!isDragging || !cropImg) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    cropOffset = {
      x: imgOffsetStart.x + dx,
      y: imgOffsetStart.y + dy,
    };
    renderCropPreview();
  });
  window.addEventListener("mouseup", function () {
    isDragging = false;
    avatarCropPreview.style.cursor = "grab";
  });

  // Touch support
  avatarCropPreview.addEventListener("touchstart", function (e) {
    if (!cropImg) return;
    isDragging = true;
    const touch = e.touches[0];
    dragStart = { x: touch.clientX, y: touch.clientY };
    imgOffsetStart = { ...cropOffset };
  });
  window.addEventListener("touchmove", function (e) {
    if (!isDragging || !cropImg) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragStart.x;
    const dy = touch.clientY - dragStart.y;
    cropOffset = {
      x: imgOffsetStart.x + dx,
      y: imgOffsetStart.y + dy,
    };
    renderCropPreview();
  });
  window.addEventListener("touchend", function () {
    isDragging = false;
  });

  function renderCropPreview() {
    avatarCropPreview.innerHTML = "";
    if (!cropImg) return;

    const size = 320;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const scale = cropZoom;
    const iw = cropImg.naturalWidth;
    const ih = cropImg.naturalHeight;

    const aspectImg = iw / ih;
    const aspectCrop = 1;
    let drawW, drawH;
    if (aspectImg > aspectCrop) {
      drawH = size * scale;
      drawW = drawH * aspectImg;
    } else {
      drawW = size * scale;
      drawH = drawW / aspectImg;
    }

    const offsetX = (size - drawW) / 2 + cropOffset.x;
    const offsetY = (size - drawH) / 2 + cropOffset.y;
    ctx.drawImage(cropImg, offsetX, offsetY, drawW, drawH);
    ctx.restore();
    avatarCropPreview.appendChild(canvas);
  }

  // Simpan hasil crop ke avatar
  avatarCropApply.addEventListener("click", function () {
    if (!cropImg) return;

    const size = 220;
    const previewSize = 320;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Hitung skala dan offset sama seperti preview
    const scale = cropZoom;
    const iw = cropImg.naturalWidth;
    const ih = cropImg.naturalHeight;
    const aspectImg = iw / ih;
    const aspectCrop = 1;
    let drawW, drawH;
    if (aspectImg > aspectCrop) {
      drawH = previewSize * scale;
      drawW = drawH * aspectImg;
    } else {
      drawW = previewSize * scale;
      drawH = drawW / aspectImg;
    }

    const offsetX = (previewSize - drawW) / 2 + cropOffset.x;
    const offsetY = (previewSize - drawH) / 2 + cropOffset.y;

    ctx.drawImage(
      cropImg,
      offsetX * (size / previewSize),
      offsetY * (size / previewSize),
      drawW * (size / previewSize),
      drawH * (size / previewSize)
    );
    ctx.restore();

    // Update preview avatar
    avatarImg.src = canvas.toDataURL("image/png");

    canvas.toBlob(function (blob) {
      const file = new File([blob], "avatar.png", { type: "image/png" });

      const dt = new DataTransfer();
      dt.items.add(file);
      avatarInput.files = dt.files;
    }, "image/png");

    avatarCropModal.classList.remove("active");
    cropImg = null;
    cropOffset = { x: 0, y: 0 };
  });

  avatarCropClose.addEventListener("click", closeCropModal);
  avatarCropCancel.addEventListener("click", closeCropModal);
  function closeCropModal() {
    avatarCropModal.classList.remove("active");
    cropImg = null;
    cropOffset = { x: 0, y: 0 };
  }

  avatarCropDelete.addEventListener("click", function () {
    avatarImg.src = defaultAvatar;
    avatarInput.value = "";
    closeCropModal();
  });

  // === Avatar Edit Click Handler ===
  [avatarImg, avatarEditIcon, avatarEditHover].forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      avatarInput.click();
    });
  });

  // === Nama & Username Update Logic ===
  function updateAvatarInfo() {
    avatarName.textContent = nameInput.value.trim() || "Nama";
    avatarUsername.textContent = usernameInput.value.trim()
      ? "@" + usernameInput.value.trim()
      : "@username";
  }
  nameInput.addEventListener("input", updateAvatarInfo);
  usernameInput.addEventListener("input", updateAvatarInfo);

  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", function () {
      profileEditPanel.classList.add("active");
    });
  }
  cancelEditProfile.addEventListener("click", function () {
    profileEditPanel.classList.remove("active");
  });
  document
    .getElementById("editProfileForm")
    .addEventListener("submit", function (e) {});

  // Toggle password
  document
    .getElementById("toggleEditPassword")
    .addEventListener("click", function () {
      const pw = document.getElementById("editPassword");
      pw.type = pw.type === "password" ? "text" : "password";
      this.querySelector("i").classList.toggle("fa-eye");
      this.querySelector("i").classList.toggle("fa-eye-slash");
    });

  // Inisialisasi awal
  updateAvatarInfo();
});

// Handler klik avatar image
avatarImg.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  avatarInput.click();
});

// Handler klik icon pensil
avatarEditIcon.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  avatarInput.click();
});

// Handler klik area hover
avatarEditHover.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  avatarInput.click();
});

avatarInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) {
    avatarInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    avatarCropPreview.src = e.target.result;
    avatarCropModal.classList.add("active");
  };
  reader.readAsDataURL(file);
});
