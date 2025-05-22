// --- Mật khẩu ---
const MAIN_PASSWORD = "123"; // Mật khẩu để truy cập desktop
const DOCX_PASSWORD = "456"; // Mật khẩu cho file docx

// --- DOM Elements ---
const loginScreen = document.getElementById('login-screen');
const desktop = document.getElementById('desktop');
const mainPasswordInput = document.getElementById('main-password-input');
const loginError = document.getElementById('login-error');

const imageViewerModal = document.getElementById('image-viewer');
const textViewerModal = document.getElementById('text-viewer');
const docxPasswordPromptModal = document.getElementById('docx-password-prompt');
const docxViewerModal = document.getElementById('docx-viewer');
const docxPasswordInput = document.getElementById('docx-password-input');
const docxError = document.getElementById('docx-error');
const clockElement = document.getElementById('clock');

// --- Chức năng đăng nhập chính ---
function checkMainPassword() {
    if (mainPasswordInput.value === MAIN_PASSWORD) {
        loginScreen.style.display = 'none';
        desktop.style.display = 'block';
        updateClock();
        setInterval(updateClock, 1000); // Cập nhật đồng hồ mỗi giây
    } else {
        loginError.textContent = 'Mật khẩu không đúng. Vui lòng thử lại.';
        mainPasswordInput.value = '';
    }
}

// --- Xử lý sự kiện nhấn Enter cho ô mật khẩu chính ---
mainPasswordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkMainPassword();
    }
});


// --- Đồng hồ ---
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// --- Chức năng mở file ---
function openImage() {
    // Thay 'placeholder_image.jpg' bằng đường dẫn ảnh thực tế của bạn
    document.getElementById('displayed-image').src = 'placeholder_image.jpg';
    imageViewerModal.style.display = 'flex';
}

function closeImageViewer() {
    imageViewerModal.style.display = 'none';
}

function openTextFile() {
    textViewerModal.style.display = 'flex';
}

function closeTextViewer() {
    textViewerModal.style.display = 'none';
}

function promptDocxPassword() {
    docxPasswordInput.value = ''; // Xóa mật khẩu cũ
    docxError.textContent = ''; // Xóa thông báo lỗi cũ
    docxPasswordPromptModal.style.display = 'flex';
}

function closeDocxPasswordPrompt() {
    docxPasswordPromptModal.style.display = 'none';
}

function checkDocxPassword() {
    if (docxPasswordInput.value === DOCX_PASSWORD) {
        closeDocxPasswordPrompt();
        openDocxFile();
    } else {
        docxError.textContent = 'Mật khẩu file không đúng.';
        docxPasswordInput.value = '';
    }
}
// --- Xử lý sự kiện nhấn Enter cho ô mật khẩu DOCX ---
docxPasswordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkDocxPassword();
    }
});


function openDocxFile() {
    // Đây là phần giả lập, bạn có thể thay đổi nội dung này
    document.getElementById('docx-content').innerHTML = `
        <p><strong>File: Secret.docx</strong></p>
        <p>Nội dung bí mật của file DOCX sẽ được hiển thị tại đây.</p>
        <p>Do hạn chế của trình duyệt, việc hiển thị trực tiếp file .docx rất phức tạp.</p>
        <p>Đây chỉ là một thông báo mô phỏng việc mở file thành công.</p>
    `;
    docxViewerModal.style.display = 'flex';
}

function closeDocxViewer() {
    docxViewerModal.style.display = 'none';
}

// --- Đóng modal khi click bên ngoài ---
window.onclick = function(event) {
    if (event.target == imageViewerModal) {
        closeImageViewer();
    }
    if (event.target == textViewerModal) {
        closeTextViewer();
    }
    if (event.target == docxPasswordPromptModal) {
        closeDocxPasswordPrompt();
    }
    if (event.target == docxViewerModal) {
        closeDocxViewer();
    }
}

// --- Khởi tạo ---
// Không cần làm gì thêm ở đây vì màn hình đăng nhập sẽ hiển thị đầu tiên
// updateClock(); // Gọi lần đầu để hiển thị ngay (nếu không có màn hình login)
// setInterval(updateClock, 1000);