const letters = [
    {
        id: 0,
        from: "Reminder",
        background: "image1.png",
        content: `
            <div class="letter-content h-full flex flex-col items-center justify-center text-center">
                <h1 class="text-4xl font-bold text-gray-800 mb-8">Reminder</h1>
                <p class="text-2xl text-gray-700 mb-4 font-['DFVN_Boris']">2025年4月1日、遠い道のり、すべてが思い通りに、無事でありますように。</p>
                <p class="text-xl text-gray-600 italic">Dịch: 01/04/2025, đường xa vạn dặm, vạn sự như ý, bình an vô sự</p>
            </div>
        `
    },
    {
        id: 1,
        from: "Trà My",
        background: "image18.png",
        content: `
            <div class="letter-content h-full flex flex-col">
                <div class="mb-6 border-b border-gray-200 pb-4">
                    <p class="text-gray-700 text-xl font-semibold">From: Trà My</p>
                </div>
                <div class="flex-1 overflow-y-auto space-y-4 text-gray-600 leading-relaxed letter-content text-lg font-['DFVN_Boris'] custom-scrollbar pr-4">
                    <p>Hilu Hoài Thu! Tui My Lẻ đây.</p>
                    <p>Tuy rất buồn khi Thu Lê sắp phải sang Nhật nhưng tui vẫn luôn ủng hộ vì biết đây là ước mơ của Thu. Nhớ những ngày đầu gặp nhau, lập hội F4 A7, cùng đi ăn, đi chơi, tâm sự, tớ lại càng trân trọng tình bạn này.</p>
                    <p>Dù xa nhau, My mong Thu luôn mạnh mẽ, giữ gìn sức khỏe, vui vẻ và đừng quên có hội F4 luôn bên cạnh. Khi nào về nhớ hú nhé, không là giận đấy!</p>
                    <p>Chúc Thu may mắn, thành công và My tự hào về Thu rất nhiều!</p>
                    <p class="pt-4 italic text-gray-500">(À, nhớ để My qua chúc Tết ông bà nữa nha! Chúc hơi ngắn để dành để viết thiệp nữa)</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        from: "Ngọc Lan",
        background: "image1.png",
        content: `
            <div class="letter-content h-full flex flex-col">
                <div class="mb-6 border-b border-gray-200 pb-4">
                    <p class="text-gray-700 text-xl font-semibold">From: Ngọc Lan</p>
                </div>
                <div class="flex-1 overflow-y-auto space-y-4 text-gray-600 leading-relaxed letter-content text-lg font-['DFVN_Boris'] custom-scrollbar pr-4">
                    <p>Xin chào Hoài Thu, tớ là Ngọc Lan đây!!!!</p>
                    <p>Ba năm cấp 3 của chúng mình bay nhanh quá nhỉ, vèo 1 cái F4 đã xa nhau và loay hoay tìm những hướng đi phù hợp cho riêng mình. Cảm ơn A7 vì đã cho chúng mình có duyên gặp nhau, thật ra ai gặp và được làm bạn với t cũng thật may mắn.</p>
                    <p>Cảm ơn cậu vì đã xuất hiện và tô điểm vào thời cấp 3 xinh đẹp của tớ. Tớ xin lỗi nếu có việc gì đó tớ làm khiến cậu phật lòng, nhưng chắc cũng không có đâu hí hí.</p>
                    <p>Thời gian đầu sang bên một đất nước lạ lẫm sẽ khá là khó khăn, nhưng tớ tin với sự cố gắng của cậu thì không có gì là không thể. Hãy nhớ tớ, My và Tlan sẽ luôn đứng đằng sau ủng hộ mọi quyết định của cậu, nên cứ mạnh dạn khám phá Nhật Bản đi nhé.</p>
                    <p>Cuối cùng, tớ chỉ cầu mong cậu luôn bình an và khỏe mạnh.</p>
                    <p class="font-bold text-pink-500">WE LOVE YOU SO MUCH MORE!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
                    <p class="pt-4 italic text-gray-500">P/s: Tao thích socola Nhật lắm, cái loại Socola bọc hạnh nhân Meiji Almond và Kitkat vị Cookie and cream, nào về mua cho tao nha!</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        from: "Thanh Lan",
        background: "image18.png",
        content: `
            <div class="letter-content h-full flex flex-col">
                <div class="mb-6 border-b border-gray-200 pb-4">
                    <p class="text-gray-700 text-xl font-semibold">From: Thanh Lan</p>
                </div>
                <div class="flex-1 overflow-y-auto space-y-4 text-gray-600 leading-relaxed letter-content text-lg font-['DFVN_Boris'] custom-scrollbar pr-4">
                    <p>Gửi Hoài Thu thân mến, tớ là TL đây, 1 năm trôi qua thật nhanh vậy mà sắp đến ngày cậu đi Nhật rồi!</p>
                    <p>Nhớ những ngày cấp 3 chúng mình trốn tiết Tin xuống căng tin tám chuyện hay những lần nói chuyện riêng trong giờ học. Những lẫn cãi nhau rồi lại làm lành đến những lần giúp đỡ nhau trong thi cử, nghĩ lại vừa vui vừa tiếc nuối, thời gian tới tớ sẽ nhớ cậu nhiều lắm lắm</p>
                    <p>Cảm ơn cậu vì đã xuất hiện trong những năm cấp 3 của tớ cũng xin lỗi cậu vì những lần làm cậu buồn. Sau tất cả hy vọng dù xa nhau nhưng chúng mình vẫn giữ được tình bạn tươi đẹp.</p>
                    <p>Qua đó cậu giữ sức khoẻ và cố gắng học tập tốt nhé. Chúc cậu 1 hành trình suôn sẻ thành công.</p>
                </div>
            </div>
        `
    }
];

let currentLetterIndex = 0;
let isTransitioning = false;

async function loadLetter(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    const letter = letters[index];
    if (!letter) return;

    const container = document.querySelector('.letter-container');
    const openPage = document.getElementById('open-page');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    // Cập nhật trạng thái nút
    if (index === 0) {
        prevBtn.textContent = 'Quay lại';
        prevBtn.onclick = () => {
            document.getElementById('cover-page').classList.remove('hidden');
            document.getElementById('open-page').classList.add('hidden');
        };
    } else {
        prevBtn.textContent = 'Trước';
        prevBtn.onclick = previousLetter;
    }

    if (index === letters.length - 1) {
        nextBtn.textContent = 'Hết rùi';
        nextBtn.disabled = true;
        nextBtn.classList.remove('bg-white/80', 'hover:bg-white/90', 'text-gray-800');
        nextBtn.classList.add('bg-pink-500', 'text-white', 'cursor-not-allowed');
    } else {
        nextBtn.textContent = 'Tiếp';
        nextBtn.disabled = false;
        nextBtn.classList.remove('bg-pink-500', 'text-white', 'cursor-not-allowed');
        nextBtn.classList.add('bg-white/80', 'hover:bg-white/90', 'text-gray-800');
        nextBtn.onclick = nextLetter;
    }

    // Thêm class để bắt đầu animation
    container.classList.add('page-exit');
    
    // Thêm transition cho background
    openPage.style.transition = 'background-image 0.5s ease-in-out';
    openPage.style.backgroundImage = `url(./images/${letter.background})`;

    // Đợi animation kết thúc
    await new Promise(resolve => setTimeout(resolve, 500));

    // Cập nhật nội dung mới
    container.innerHTML = letter.content;
    
    // Thêm class để hiển thị nội dung mới
    container.classList.remove('page-exit');
    container.classList.add('page-enter');
    
    // Đợi animation kết thúc
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Xóa class animation
    container.classList.remove('page-enter');

    isTransitioning = false;
}

function nextLetter() {
    if (currentLetterIndex < letters.length - 1 && !isTransitioning) {
        currentLetterIndex++;
        loadLetter(currentLetterIndex);
    }
}

function previousLetter() {
    if (currentLetterIndex > 0 && !isTransitioning) {
        currentLetterIndex--;
        loadLetter(currentLetterIndex);
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', () => {
    loadLetter(currentLetterIndex);

    // Thêm sự kiện cho các nút
    document.getElementById('prev-btn').addEventListener('click', previousLetter);
    document.getElementById('next-btn').addEventListener('click', nextLetter);
}); 