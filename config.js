/* ===========================================================================
   MEETOPIA — config.js
   CHỈ CẦN SỬA FILE NÀY để đổi: đối tác, voucher, mã, câu thoại, thông số game.
   Không cần động vào index.html. Lưu file, tải lại trang là thấy thay đổi.

   LƯU Ý: nội dung đối tác / voucher bên dưới là DỮ LIỆU MẪU. Hãy thay bằng
   thông tin thật khi chốt quán (tên, ưu đãi, địa chỉ, hạn dùng, mã PIN quầy).
   Quy tắc khi sửa: giữ nguyên dấu nháy ' ' quanh chữ, giữ dấu phẩy cuối dòng.
   =========================================================================== */
window.MEETOPIA_CONFIG = {

  version: '4.0.0',
  saveKey: 'meetopia_ch1_v1',

  /* ---------------- 1. THÔNG SỐ CÂN BẰNG GAME ---------------- */
  balance: {
    gameRate: 12,            // 1 giây thật = 12 giây game
    playerSpeed: 5.6,        // tốc độ chạy của Con Sen
    startCoins: 30,          // Sen Coin lúc bắt đầu
    jobCooldownSec: 180,     // hồi mỗi việc ở Trung tâm việc làm (giây THẬT). Việc nào cần riêng: jobs.<id>.cooldownSec
    hungryAfterMin: 240,     // phút GAME không cho ăn -> Boss đói  (240 = 4 giờ game = 20 phút thật)
    exhaustedAfterMin: 480,  // phút GAME không cho ăn -> Boss kiệt quệ
    sadAfterMin: 480,        // phút GAME không có đồ mới -> Boss buồn
    noHungerFromHour: 19,    // khung giờ game KHÔNG tính đói (đêm)
    noHungerToHour: 23,
    happyAfterBuyMin: 60     // Boss vui bao lâu (phút game) sau khi mua đồ / được tắm
  },

  /* ---------------- 2. CHĂM SÓC: NGOẠI HÌNH XUỐNG DẦN THEO THỜI GIAN ---------------- */
  care: {
    // Mốc PHÚT GAME bỏ bê để lên cấp 1 / 2 / 3 (1 phút thật = 12 phút game).
    // Mặc định 20/40/60: khoảng 1:40 / 3:20 / 5:00 phút thật -> hợp test 3-5 phút.
    senStages: [20, 40, 60],
    bossStages: [25, 50, 75],
    dressCost: 0,            // Sen Coin để tắm rửa + thay đồ (Con Sen)
    bossBathCost: 5,         // Sen Coin để tắm + chải lông cho Boss
    idleLineEverySec: [20, 36], // cứ khoảng này (giây thật) nhân vật lại buột miệng 1 câu khi đang xuống cấp
    senNames: ['Tươi tỉnh', 'Bơ phờ', 'Luộm thuộm', 'Thảm họa'],
    bossNames: ['Sạch sẽ', 'Xộc xệch', 'Lấm lem', 'Thảm họa']
  },

  /* ---------------- 3. CÂU THOẠI HÀI HƯỚC (Con Sen & Boss) ---------------- */
  funny: {
    sen: {
      1: ['Mắt tôi thâm hơn cả đáy nồi...', 'Hình như tôi quên mất cách ngủ đủ giấc.', 'Cà phê đâu... cho tôi cà phê...'],
      2: ['Tóc tôi đang tự do phát biểu ý kiến.', 'Cái áo này nhăn tới mức có thể nộp thuế.', 'Tôi vừa đi qua gương, gương né tôi luôn.'],
      3: ['Ruồi nhìn tôi rồi gật đầu: đồng loại!', 'Tôi không bẩn, tôi đang lưu trữ trải nghiệm.', 'Mùi gì thế nhỉ? À, là tôi.']
    },
    boss: {
      1: ['Boss thở dài, tạm dịch: Con Sen làm ăn kiểu gì vậy?', 'Boss đang cân nhắc nộp đơn xin chủ mới.'],
      2: ['Boss lăn một vòng và hóa thành cục bùn biết đi.', 'Boss: Tôi không bẩn, tôi mang hương vị phố phường.'],
      3: ['Ruồi đang xếp hàng xin chụp ảnh với Boss.', 'Boss tuyên bố đình công cho tới khi được tắm.']
    },
    senFresh: ['Tươi như hoa! Hôm nay đi phỏng vấn tổng thống cũng được.', 'Sạch bong kin kít, ruồi thất nghiệp hết rồi!', 'Nhìn tôi bây giờ ai dám bảo là Con Sen!'],
    bossFresh: ['Boss thơm phức, đòi chụp ảnh ngay!', 'Boss sạch bóng như vừa trúng số!', 'Boss: Được, Con Sen được tăng lương... bằng một cái liếm mặt.'],
    bossFed: ['Nhai nhai... Boss tuyên bố đây là bữa ăn của thế kỷ!', 'Boss ăn xong, nhìn Con Sen bằng ánh mắt biết ơn (tạm thời).']
  },

  /* ---------------- 4. VIỆC Ở TRUNG TÂM MÔI GIỚI ---------------- */
  jobOrder: ['deliver', 'pet', 'wig'],
  jobs: {
    deliver: { icon: '📦', title: 'Giao hàng', reward: 40, short: 'Giao gói hàng tới 2 điểm mốc trước khi hết giờ. Có mũi tên chỉ đường.' },
    pet: { icon: '🐾', title: 'Bắt thú cưng xổng chuồng', reward: 50, short: 'Một bé thú cưng trốn chuồng, chạy lắt léo ở khu phía nam. Áp sát rồi bấm Bắt!' },
    wig: { icon: '💇', title: 'Tìm bộ tóc giả', reward: 60, short: 'Bộ tóc giả phát sáng nằm đâu đó trong thành phố. Nhặt rồi mang về trả Chị Hằng.' }
  },

  /* ---------------- 5. CỬA HÀNG ---------------- */
  shop: {
    foods: [
      { id: 'snack', name: 'Hạt khô', desc: 'Lót dạ: no thêm ~2 giờ game', price: 10, credit: 120 },
      { id: 'meal', name: 'Bữa ngon', desc: 'No đầy đủ 4 giờ game', price: 25, credit: 0 }
    ],
    items: [
      { id: 'bed', name: 'Ổ nằm êm', desc: 'Đệm, gối rồi cả mái che cho Boss', prices: [40, 80, 130] },
      { id: 'toy', name: 'Đồ chơi', desc: 'Bóng, thú bông, cầu trượt mini', prices: [35, 70, 120] },
      { id: 'house', name: 'Nhà gỗ nhỏ', desc: 'Boss có nhà riêng trong nhà của Con Sen', prices: [60, 100, 160] },
      { id: 'seat', name: 'Đệm cửa sổ', desc: 'Chỗ ngắm phố, đỡ buồn', prices: [45, 75, 115] }
    ]
  },

  /* ---------------- 6. NPC ĐỜI THƯỜNG (tự đi dạo quanh chỗ của họ) ---------------- */
  npcTalkDist: 4.2,          // Con Sen lại gần trong khoảng này thì NPC dừng và nói
  wander: { speed: 1.6, idleMin: 1.5, idleMax: 4.5, stopDist: 4.8 },
  // look: chỉ số màu trong bảng màu của game (skin 0-2, hair 0-3, shirt 0-3)
  npcs: [
    { id: 'tu', name: 'Bác Tư', x: -8.5, z: 4.5, rot: 0.6, wanderRadius: 4.5, look: { gender: 'm', skin: 1, hair: 3, shirt: 1 }, lines: [
      'Vé số hôm nay trúng... cái bóng của tôi thôi!', 'Bán vé số mà tôi vẫn chưa trúng nổi giải khuyến khích.', 'Boss nhà cậu trông giàu hơn tôi đấy.', 'Tôi tin con số 69. Đừng hỏi vì sao.', 'Ai mua vé số không? Hứa là vé thật!', 'Đi bộ ngoài này mát ghê, mát hơn ví tôi.'] },
    { id: 'lan', name: 'Cô Lan', x: 11.5, z: -5.5, rot: -0.8, wanderRadius: 4.0, look: { gender: 'f', skin: 0, hair: 1, shirt: 3 }, lines: [
      'Tôi đang ăn kiêng... từ sáng nay, ngày thứ nhất.', 'Cà phê gì cũng được, miễn là có cà phê.', 'Đi bộ cho khỏe, còn mỏi chân là chuyện của đôi chân.', 'Con Sen mà cũng đòi đi làm hả? Giỏi ghê!', 'Chiếc ghế dài kia là chỗ ngồi VIP của tôi đó.', 'Tôi không già, tôi chỉ đang cập nhật phiên bản.'] },
    { id: 'teo', name: 'Anh Tèo', x: 7.5, z: 13.5, rot: 2.6, wanderRadius: 4.5, look: { gender: 'x', skin: 2, hair: 0, shirt: 2 }, lines: [
      'Tôi đang chờ ý tưởng khởi nghiệp. Nó trễ hẹn 3 năm rồi.', 'Đừng hỏi lương, hỏi là tôi khóc.', 'Làm việc nhóm là khi mọi người cùng chờ một người làm.', 'Nghe nói Boss lương cao hơn tôi, có thật không?', 'Ví tôi cũng đói như Boss lúc 8 tiếng chưa ăn.', 'Cuối tuần tôi bận lắm: bận nằm.'] },
    // Chị Hằng đứng cố định ở quầy việc làm (job: true)
    { id: 'hang', name: 'Chị Hằng', x: -16.5, z: -13.2, rot: 0, job: true, look: { gender: 'f', skin: 0, hair: 0, shirt: 0 }, lines: [
      'Có việc đây! Lương trả bằng Sen Coin, không nhận lời cảm ơn.', 'Nhận việc đi, Boss đang nhìn ví của bạn kìa.', 'Việc nhẹ lương cao? Không có, nhưng có việc... vừa vừa.'] }
  ],

  /* ---------------- 7. ĐỐI TÁC & MINI-GAME ---------------- */
  // game: 'cross' = Chuyển hàng qua đường 2 chiều | 'swat' = Đập ruồi quầy cà phê
  // zone: vị trí khu vực đối tác trên quảng trường. voucher: id trong mục 8.
  partners: [
    { id: 'p1', game: 'cross', voucher: 'v_bakery', brand: 'Tiệm Bánh Lúa Mới', zoneLabel: 'Tiệm Bánh\nLúa Mới',
      zone: { x: -18, z: 7 }, npc: { name: 'Cô Sáu', look: { gender: 'f', skin: 1, hair: 2, shirt: 3 } },
      title: 'Chuyển hàng qua đường',
      intro: 'Chào Con Sen! Khách bên kia đường đang chờ giỏ bánh nóng. Xe chạy hai chiều, né cho khéo nhé!',
      task: 'Cầm gói hàng băng qua đường 2 chiều, né xe để giao cho khách ở phía đối diện. Có {lives} lượt va chạm.',
      lines: ['Giỏ bánh giao trễ là thành bánh nguội đó nha!', 'Qua đường nhớ nhìn hai bên. Tôi dặn thật lòng đó.', 'Xe cộ ở đây chạy như đi trễ giờ ăn trưa.', 'Giao xong tôi tặng voucher, giao không xong tôi tặng lời động viên.'],
      linesDone: ['Voucher của bạn nằm trong Kho Voucher rồi, nhớ mang tới tiệm nha!', 'Cảm ơn Con Sen, giỏ bánh tới nơi còn nóng hổi!'] },
    { id: 'p2', game: 'swat', voucher: 'v_coffee', brand: 'Cà Phê Hạt Nâu', zoneLabel: 'Cà Phê\nHạt Nâu',
      zone: { x: 18, z: 7 }, npc: { name: 'Anh Hạt', look: { gender: 'm', skin: 0, hair: 0, shirt: 1 } },
      title: 'Đập ruồi quầy cà phê',
      intro: 'Ruồi bay vào ly cà phê là tôi mất khách đó! Con Sen giúp tôi đập {need} con nhé.',
      task: 'Ruồi bay loạn quanh quầy cà phê. Bấm hoặc chạm trúng đủ {need} con để hoàn thành.',
      lines: ['Đập đủ 5 con, tôi mời ly cà phê.', 'Ruồi ở đây khôn lắm, vỗ cánh còn nhanh hơn tôi pha cà phê.', 'Cẩn thận đừng đập trúng máy pha nha!', 'Ruồi nó chê cà phê của tôi... thế mà vẫn bay quanh.'],
      linesDone: ['Cảm ơn Con Sen! Voucher nằm trong Kho Voucher rồi nhé.', 'Quầy sạch ruồi, khách vui, tôi cũng vui!'] }
  ],

  minigames: {
    cross: {
      lives: 3, invulnSec: 1.4, carsPerLane: 2,
      // mỗi phần tử = 1 làn: dir 1 = chạy sang phải, -1 = sang trái; speed = tốc độ. Nên giữ 3-4 làn.
      lanes: [{ dir: 1, speed: 3.6 }, { dir: 1, speed: 5.2 }, { dir: -1, speed: 4.4 }, { dir: -1, speed: 6.0 }]
    },
    swat: { need: 5, extra: 2, flySpeed: 3.8, hitRadiusPx: 40 }
  },

  /* ---------------- 8. VOUCHER ---------------- */
  // Cách B: mỗi người chơi nhận MÃ RIÊNG dạng PREFIX-XXXX (tự sinh ngẫu nhiên trong game).
  // Chủ quán ghi lại mã đã đổi (giấy / Google Sheet). Game KHÔNG tự giới hạn tổng số voucher.
  staffPin: '2468',          // mã PIN của nhân viên để bấm "Đã dùng". ĐỔI TRƯỚC KHI DÙNG THẬT!
  voucherSteps: [
    'Chụp màn hình thẻ voucher này (thấy rõ tên quán, mã và đồng hồ).',
    'Mang tới quầy: {store}.',
    'Đưa cho nhân viên xem, nhân viên xác nhận và bấm Đã dùng.'
  ],
  vouchers: {
    v_bakery: { brand: 'Tiệm Bánh Lúa Mới', color: '#A5654A', prefix: 'LUAMOI', codeLen: 4,
      offer: 'Giảm 20%', detail: 'Áp dụng cho 1 hóa đơn bánh tại quầy (tối đa 100.000đ).',
      store: 'Tiệm Bánh Lúa Mới - [ĐỊA CHỈ QUÁN]',
      validHours: 24,        // hạn dùng tính từ lúc nhận (giờ THẬT)
      endDate: '',           // (tuỳ chọn) hạn chót cứng, ví dụ '2026-12-31T23:59:00+07:00'
      note: 'Mỗi mã chỉ dùng một lần, không cộng dồn khuyến mãi khác.' },
    v_coffee: { brand: 'Cà Phê Hạt Nâu', color: '#5C4028', prefix: 'HATNAU', codeLen: 4,
      offer: 'Tặng 1 ly cà phê', detail: 'Tặng 1 ly cà phê sữa (size M) khi mua 1 ly bất kỳ.',
      store: 'Cà Phê Hạt Nâu - [ĐỊA CHỈ QUÁN]',
      validHours: 24, endDate: '',
      note: 'Mỗi mã chỉ dùng một lần, không cộng dồn khuyến mãi khác.' }
  },

  /* ---------------- 9. MÀN HÌNH MỞ ĐẦU & HỒ SƠ MẶC ĐỊNH ---------------- */
  intro: {
    title: 'Meetopia',
    lines: ['Bạn là Con Sen.', 'Boss đang đói và hơi khó tính.', 'Đi làm kiếm Sen Coin, chăm Boss thật khéo nhé!'],
    lineMs: 1700             // thời gian hiện mỗi dòng (3 dòng ≈ 5 giây)
  },
  // Hồ sơ dùng khi bấm "Bắt đầu ngay" (bỏ qua bước tạo nhân vật). Chỉ số màu như ở mục 6.
  defaultProfile: { name: 'Con Sen', gender: 'm', skin: 0, hair: 1, shirt: 0, pet: 'dog', petName: 'Boss' },
  devTools: false            // true = hiện nút Test giờ (+1h/+4h/+8h). Hoặc thêm ?dev=1 vào link.
};
