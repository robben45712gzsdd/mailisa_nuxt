<template>
  <div>
    <!-- Banner -->
    <img :src="images.bannerSanPham" alt="" />

    <!-- Sản phẩm nổi bật -->
    <div class="mx-auto py-6 md:py-10 container">
      <HeadingTitle title="SẢN PHẨM ĐƯỢC PHẨM YÊU THÍCH" />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="gap-2 md:gap-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10"
      >
        <BoxProduction
          v-for="(item, index) in dataService"
          :key="index"
          :title="item.title"
          :description="item.desc"
          :image="item.img"
          :oldPrice="item.oldPrice"
          :newPrice="item.newPrice"
          :link="item.link"
        />
      </div>
    </div>

    <div class="container pt-12 pb-8 border-b border-[#e1006e]">
      <h2 class="text-center text-2xl font-bold">MỸ PHẨM DOCTOR MAGIC</h2>
    </div>

    <div class="w-full py-6 md:py-12">
      <client-only>
        <SlickCarousel v-bind="settingsIntroView">
          <div v-for="(item, index) in listIntroViews" :key="index">
            <div class="p-2">
                <BoxService  
                  :title="item.title"
                  :image="item.img"
                  :link="item.link"
                />
            </div>
          </div>
        </SlickCarousel>
      </client-only>
    </div>

    <!-- Đăng ký -->
    <div
      :style="{ backgroundImage: `url(${images?.trangmoi})` }"
      class="relative bg-cover py-6 md:py-12 bg-no-repeat bg-center introview"
    >
      <SignupForConsultation :classText="'!text-white'" />
    </div>

    <!-- Báo chí -->
    <NewsPress />
  </div>
</template>

<script>
import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";
import NewsPress from "@/components/NewsPress";
import BoxProduction from "@/components/BoxProduction";
import SignupForConsultation from "@/components/SignupForConsultation";
export default {
  name: "Cosmetics",
  components: {
    BoxService,
    HeadingTitle,
    NewsPress,
    BoxProduction,
    SignupForConsultation,
  },
  data() {
    return {
      images,
      dataService: [
        {
          index: 1,
          title: "BỘ N6 - HỖ TRỢ CẢI THIỆN NÁM, TÀN NHANG, ĐỒI MỒI",
          desc: "N6 (1+5+18) - Bộ Kem Dưỡng Doctor Magic Hỗ Trợ Cải Thiện Da Nám, Tàn Nhang, Đồi Mồi gồm: Kem Hỗ Trợ Làm Mờ Thâm Nám + Kem Dưỡng Hỗ Trợ Sáng Da Alpha-Arbutin + Kem Hỗ Trợ Dưỡng Ẩm Chuyên Sâu - Làm Đẹp Da",
          link: "https://mailisa.com/san-pham/bo-n6-ho-tro-cai-thien-da-nam-tan-nhang-doi-moi/",
          img: require("@/assets/imgs/AllCosmetics/N6-1-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/08/N6-1-1.jpg",
          oldPrice: 2370000,
          newPrice: 1900000,
        },
        {
          index: 2,
          title: "BỘ B1 - BỘ KEM DƯỠNG HỖ TRỢ SÁNG DA",
          desc: "B1 – Bộ Kem Dưỡng Doctor Magic Hỗ Trợ Sáng Da là giải pháp chăm sóc chuyên sâu cho làn da sạm màu, xỉn màu hay cháy nắng. Công thức kết hợp nhiều hoạt chất dưỡng ẩm và phục hồi, giúp hỗ trợ cải thiện sắc da, duy trì làn da mềm mại, sáng khỏe và rạng rỡ dài lâu.",
          link: "https://mailisa.com/bo-b1-doctor-magic/",
          img: require("@/assets/imgs/AllCosmetics/B01.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/02/B01.jpg",
          oldPrice: 1900000,
          newPrice: 1550000,
        },
        {
          index: 3,
          title: "BỘ C2 - CHĂM SÓC DA CƠ BẢN",
          desc: "Bộ C2 – Chăm Sóc Da Cơ Bản Doctor Magic là giải pháp dưỡng da toàn diện hằng ngày, giúp làm sạch – chăm sóc – nuôi dưỡng và duy trì làn da khỏe đẹp, mịn màng tự nhiên.",
          link: "https://mailisa.com/san-pham/bo-c2-cham-soc-da-co-ban/",
          img: require("@/assets/imgs/AllCosmetics/C02.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/C02.jpg",
          oldPrice: 1400000,
          newPrice: 1138000,
        },
        {
          index: 4,
          title: "Bộ B17 - BỘ KEM DƯỠNG HỖ TRỢ CẢI THIỆN DA MỤN",
          desc: "B17 – Bộ Kem Dưỡng Doctor Magic Hỗ Trợ Cải Thiện Da Mụn là giải pháp chăm sóc dành riêng cho làn da mụn, phù hợp cả da nhạy cảm và da đang phục hồi. Công thức kết hợp dưỡng ẩm, phục hồi, sáng da và hỗ trợ giảm mụn giúp nuôi dưỡng làn da khỏe mạnh, tươi sáng mỗi ngày.",
          link: "https://mailisa.com/san-pham/bo-b17-danh-cho-da-mun/",
          img: require("@/assets/imgs/AllCosmetics/B17.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/03/B17.jpg",
          oldPrice: 1850000,
          newPrice: 1517000,
        },
        {
          index: 5,
          title: "BỘ S7 - BỘ KEM DƯỠNG HỖ TRỢ DA SẸO RỖ",
          desc: "Bộ S7 (3+18+19+23+55) – Bộ Kem Dưỡng Doctor Magic Hỗ Trợ Da Sẹo Rỗ là giải pháp chăm sóc da toàn diện, giúp cải thiện bề mặt da, dưỡng ẩm sâu và mang lại làn da sáng khỏe, mềm mịn.",
          link: "https://mailisa.com/san-pham/bo-s7-bo-kem-duong-ho-tro-da-seo-ro/",
          img: require("@/assets/imgs/AllCosmetics/S7-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/10/S7-1.jpg",
          oldPrice: 3000000,
          newPrice: 2468000,
        },
        {
          index: 6,
          title: "A1- COMBO DUNG DỊCH VỆ SINH",
          desc: "A1 là Combo Dung Dịch Vệ Sinh: Sự kết hợp giữa Dung Dịch Vệ Sinh Saffron và Xà Sàng Tử Clean & Fresh, mang đến giải pháp chăm sóc toàn diện cho vùng da nhạy cảm",
          link: "https://mailisa.com/san-pham/combo-dung-dich-ve-sinh/",
          img: require("@/assets/imgs/AllCosmetics/A1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/08/A1.jpg",
          oldPrice: 670000,
          newPrice: 550000,
        },
        {
          index: 7,
          title: "MS09 - TINH CHẤT DƯỠNG LÔNG MÀY, MI",
          desc: "MS09 Tinh Chất Dưỡng Lông Mày, Mi là dòng tinh chất dưỡng chuyên sâu dành riêng cho vùng mi & mày, với công thức chứa peptide thế hệ mới và chất dẫn thẩm thấu ưu việt. Sản phẩm giúp hỗ trợ chăm sóc vùng da chân mi, mày trở nên mềm mại, khỏe hơn mỗi ngày, tạo cảm giác lông mi trông cong dài, chân mày đầy đặn và vào nếp hơn. Sử dụng đều đặn mỗi ngày giúp cải thiện cảm quan về độ dày và độ chắc khỏe của sợi lông.",
          link: "https://mailisa.com/ms09-tinh-chat-duong-long-may-mi/",
          img: require("@/assets/imgs/AllCosmetics/MS09.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/MS09.jpg",
          oldPrice: 550000,
          newPrice: 450000,
        },
        {
          index: 8,
          title: "MS10 - TINH CHẤT DƯỠNG MÔI",
          desc: "MS10 Tinh Chất Dưỡng Môi là 1 dòng tinh chất dưỡng môi chuyên sâu giúp hỗ trợ cấp ẩm – làm dịu – phục hồi và dưỡng sáng môi. Nhờ công thức kết hợp Oligopeptide-1 – Allantoin – Yến mạch – Chiết xuất thảo dược quý, sản phẩm giúp môi mềm mịn, hỗ trợ cải thiện sắc tố môi thâm, tạo nền hoàn hảo trước khi thoa son. Kết cấu nhẹ, không nhờn, thích hợp dùng cả ngày và đêm.",
          link: "https://mailisa.com/ms10-tinh-chat-duong-moi/",
          img: require("@/assets/imgs/AllCosmetics/MS10.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/MS10.jpg",
          oldPrice: 490000,
          newPrice: 400000,
        },
        {
          index: 9,
          title: "M01 - KEM HỖ TRỢ LÀM MỜ THÂM NÁM",
          desc: "M01 Kem Hỗ Trợ Làm Mờ Thâm Nám là dòng kem dưỡng chuyên biệt giúp hỗ trợ làm sáng vùng da xỉn màu, phục hồi vẻ đều màu tự nhiên, đồng thời hỗ trợ cung cấp độ ẩm và làm dịu da hiệu quả. Với sự kết hợp của Retinol, BHA, sản phẩm giúp hỗ trợ cải thiện sắc tố da theo cơ chế sinh học, không tẩy trắng, không bào mòn, thân thiện với làn da khi dùng lâu dài.",
          link: "https://mailisa.com/kem-ho-tro-lam-mo-tham-nam/",
          img: require("@/assets/imgs/AllCosmetics/M01-01.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/02/M01-01.jpg",
          oldPrice: 910000,
          newPrice: 750000,
        },
        {
          index: 10,
          title: "M03 -KEM HỖ TRỢ LÀM ĐỀU MÀU SÁNG DA",
          desc: "Kem Hỗ Trợ Làm Đều Màu Sáng Da là sản phẩm chuyên biệt dành cho làn da không đều màu, xỉn màu do môi trường và tia UV. Công thức kết hợp giữa Tranexamic Acid, 4-Butylresorcinol, Butylene Glycol giúp hỗ trợ cải thiện sắc da, làm dịu và tăng cường độ ẩm, mang lại làn da sáng khỏe, mềm mịn và rạng rỡ.",
          link: "https://mailisa.com/m03-kem-ho-tro-lam-deu-mau-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M03-01.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/02/M03-01.jpg",
          oldPrice: 940000,
          newPrice: 770000,
        },
        {
          index: 11,
          title: "M05 - KEM DƯỠNG HỖ TRỢ SÁNG DA",
          desc: "M05 Kem Dưỡng Hỗ Trợ Sáng Da Alpha-Arbutin là dòng kem dưỡng giúp hỗ trợ cải thiện sắc da dành cho những làn da xỉn màu, không đều màu, hoặc thiếu sức sống. Hỗ trợ dưỡng sáng và làm đều màu da. Hỗ trợ bổ sung độ ẩm – giúp da mềm mịn. Sản phẩm được thiết kế với kết cấu mỏng nhẹ – dễ thẩm thấu – không gây bết dính",
          link: "https://mailisa.com/m05-kem-duong-da-va-ho-tro-lam-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M05.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M05.jpg",
          oldPrice: 490000,
          newPrice: 399000,
        },
        {
          index: 12,
          title: "M19 - SỮA RỬA MẶT AMINO DỊU NHẸ CÂN BẰNG PH",
          desc: "M19 Sữa Rửa Mặt Amino Dịu Nhẹ Cân Bằng pH là dòng sữa rửa mặt dịu nhẹ với công thức làm sạch tiên tiến từ acid amin, phù hợp cho mọi loại da , đặc biệt là da nhạy cảm. Sản phẩm giúp hỗ trợ làm sạch bụi bẩn, dầu thừa, cặn trang điểm còn sót lại, đồng thời giữ lại độ ẩm tự nhiên và không gây khô căng da. Độ pH cân bằng, có thể sử dụng sáng , tối hằng ngày, mang lại làn da tươi mát, sạch thoáng nhưng không mất nước",
          link: "https://mailisa.com/m19-sua-rua-mat-amino-diu-nhe/",
          img: require("@/assets/imgs/AllCosmetics/M19.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M19.jpg",
          oldPrice: 400000,
          newPrice: 299000,
        },
        {
          index: 13,
          title: "M20 - NƯỚC CÂN BẰNG DA",
          desc: "M20 Nước Cân Bằng Da là sản phẩm lý tưởng sử dụng sau bước rửa mặt, giúp làm dịu làn da và cân bằng độ pH, tạo nền tảng hấp thụ dưỡng chất tối ưu cho các bước chăm sóc tiếp theo.Sản phẩm hỗ trợ cấp ẩm nhẹ nhàng, giúp da mềm mượt, sáng khỏe và tươi mát. Với công thức dịu nhẹ, thích hợp cho da nhạy cảm, giúp hỗ trợ phục hồi các vùng da tổn thương nhẹ, đồng thời se khít lỗ chân lông và làm mát da hiệu quả. Sử dụng đều đặn sáng và tối giúp làn da luôn cân bằng, sạch thoáng và sẵn sàng tiếp nhận dưỡng chất.",
          link: "https://mailisa.com/nuoc-can-bang-da/",
          img: require("@/assets/imgs/AllCosmetics/M20.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M20.jpg",
          oldPrice: 470000,
          newPrice: 390000,
        },
        {
          index: 14,
          title: "M28 - GEL DƯỠNG DA – HỖ TRỢ PHỤC HỒI & LÀM DỊU",
          desc: "M28 Gel Dưỡng Da – Hỗ Trợ Phục Hồi & Làm Dịu là sản phẩm gel dưỡng hỗ trợ phục hồi da cao cấp, mang lại hiệu ứng mát dịu, giúp làm dịu vùng da bị căng rát. Với các thành phần giàu hoạt chất như peptide, vitamin E, bơ hạt mỡ, chiết xuất hoa cúc và gừng, sản phẩm không chỉ cung cấp độ ẩm mà còn hỗ trợ tái tạo và củng cố hàng rào bảo vệ tự nhiên của da, trả lại làn da mềm mịn, khỏe mạnh.",
          link: "https://mailisa.com/m28-gel-duong-da-ho-tro-phuc-hoi-lam-diu/",
          img: require("@/assets/imgs/AllCosmetics/M28.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M28.jpg",
          oldPrice: 2670000,
          newPrice: 2194000,
        },
        {
          index: 15,
          title: "M32 - TẨY TRANG MỊN MƯỚT",
          desc: "M32 Tẩy Trang Mịn Mướt là sản phẩm lý tưởng giúp làm sạch hoàn toàn lớp trang điểm, kem chống nắng và bụi bẩn tích tụ sâu trong lỗ chân lông, mang lại làn da sạch thoáng và mịn màng. Công thức dịu nhẹ giúp làm sạch hiệu quả mà không gây khô căng, hỗ trợ làm mềm da và giữ lại độ ẩm tự nhiên sau khi tẩy trang. Kết cấu lỏng nhẹ, không gây nhờn rít hay bết dính, dễ rửa trôi chỉ với nước hoặc sữa rửa mặt. Thân thiện cho mọi loại da, kể cả làn da nhạy cảm – phù hợp sử dụng hằng ngày để duy trì làn da sạch khỏe và thông thoáng.",
          link: "https://mailisa.com/nuoc-tay-trang-min-muot-doctor-magic/",
          img: require("@/assets/imgs/AllCosmetics/M32.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M32.jpg",
          oldPrice: 320000,
          newPrice: 220000,
        },
        {
          index: 16,
          title: "M36 Kem Hỗ Trợ Cấp Ẩm Bảo Vệ Làm Mềm Da Mất Nước",
          desc: "Kem hỗ trợ cấp ẩm bảo vệ làm mềm da mất nước là giải pháp lý tưởng giúp cải thiện làn da khô ráp, mất nước hoặc nhạy cảm. Với công thức chuyên biệt, sản phẩm hỗ trợ bổ sung độ ẩm sâu, giúp làm dịu và phục hồi da lên đến 72 giờ, mang lại làn da mềm mại và mịn màng rõ rệt. Tăng cường độ đàn hồi, đồng thời hỗ trợ củng cố hàng rào bảo vệ da, giúp da khỏe hơn mỗi ngày. Kết cấu mỏng nhẹ, thẩm thấu nhanh, không gây nhờn rít – thích hợp cho cả làn da yếu, dễ kích ứng hoặc vừa trải qua các liệu trình chăm sóc chuyên sâu.",
          link: "https://mailisa.com/m36-kem-ho-tro-cap-am-bao-ve-da/",
          img: require("@/assets/imgs/AllCosmetics/M36.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/02/M36.jpg",
          oldPrice: 490000,
          newPrice: 399000,
        },
        {
          index: 17,
          title: "M47 - MẶT NẠ HỖ TRỢ DƯỠNG ẨM LÀM SÁNG DA",
          desc: "M47 Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Làm Sáng Da là giải pháp chăm sóc da toàn diện dành cho làn da xỉn màu, thiếu sức sống hoặc vừa trải qua tình trạng mệt mỏi, căng thẳng. Sản phẩm hỗ trợ cấp nước và duy trì độ ẩm sâu, giúp da luôn mềm mượt, căng bóng và tươi tắn. Làm dịu làn da nhạy cảm, hỗ trợ giảm tình trạng kích ứng, mẩn đỏ – mang lại cảm giác dễ chịu sau khi sử dụng. Hỗ trợ làm sáng và làm đều màu da, giúp cải thiện làn da xỉn màu trở nên rạng rỡ và khỏe mạnh hơn từng ngày.",
          link: "https://mailisa.com/m47-mat-na-ho-tro-duong-am-lam-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M47.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M47.jpg",
          oldPrice: 210000,
          newPrice: 149000,
        },
        {
          index: 18,
          title: "M49 - KEM HỖ TRỢ DƯỠNG DA MỀM MỊN & SÁNG DA",
          desc: "M49 Kem Hỗ Trợ Dưỡng Da Mềm Mịn & Sáng Da là dòng sản phẩm chăm sóc da dịu nhẹ, hỗ trợ cấp ẩm sâu và nuôi dưỡng làn da mềm mịn, rạng rỡ hơn mỗi ngày. Với kết cấu kem mịn, thẩm thấu nhanh, không bết dính, sản phẩm phù hợp cho làn da khô, mệt mỏi hoặc da nhạy cảm đang cần phục hồi. Bảng thành phần kết hợp bơ hạt mỡ, glycerin, titanium dioxide, chiết xuất hoa hồng Rosa Damascena và các thảo dược thiên nhiên, mang đến cảm giác dễ chịu, giúp da được chăm sóc toàn diện và cân bằng.",
          link: "https://mailisa.com/m49-kem-ho-tro-duong-da-mem-min-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M49.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M49.jpg",
          oldPrice: 380000,
          newPrice: 300000,
        },
        {
          index: 19,
          title: "M50 - KEM HỖ TRỢ DƯỠNG SÁNG DA BAN NGÀY",
          desc: "M50 Kem Hỗ Trợ Dưỡng Sáng Da Ban Ngày là dòng kem dưỡng ẩm ban ngày với công thức dịu nhẹ, hỗ trợ cấp ẩm và bền vững cho làn da khô ráp, đồng thời làm dịu và phục hồi da nhạy cảm.",
          link: "https://mailisa.com/m50-kem-ho-tro-duong-sang-da-ban-ngay/",
          img: require("@/assets/imgs/AllCosmetics/M50.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M50.jpg",
          oldPrice: 400000,
          newPrice: 299000,
        },
        {
          index: 20,
          title: "M54 - MẶT NẠ HỖ TRỢ DƯỠNG DA MỊN MÀNG",
          desc: "M54 Mặt Nạ Hỗ Trợ Dưỡng Da Mịn Màng là dòng mặt nạ dưỡng có kết cấu mềm mỏng, lành tính, mang đến hiệu quả làm dịu và cấp ẩm cho làn da. Công thức được thiết kế để phục hồi độ mịn màng , duy trì vẻ ẩm mượt , làm đều màu da một cách nhẹ nhàng, phù hợp sử dụng định kỳ từ 1,2 lần/tuần.",
          link: "https://mailisa.com/m54-mat-na-ho-tro-duong-da-min-mang/",
          img: require("@/assets/imgs/AllCosmetics/M54.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M54.jpg",
          oldPrice: 260000,
          newPrice: 180000,
        },
        {
          index: 21,
          title: "M55 - KEM TẨY TẾ BÀO CHẾT DA MẶT HẠT MỊN",
          desc: "M55 Kem Tẩy Tế Bào Chết Da Mặt Hạt Mịn là dòng sản phẩm giúp làm sạch tế bào già cỗi thông minh, kết hợp giữa làm sạch dịu nhẹ, dưỡng ẩm giúp da sáng mịn màng, giúp da dễ  hấp  thụ dưỡng chất",
          link: "https://mailisa.com/m55-kem-tay-te-bao-chet-da-mat-hat-min/",
          img: require("@/assets/imgs/AllCosmetics/M55.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M55.jpg",
          oldPrice: 320000,
          newPrice: 220000,
        },
        {
          index: 22,
          title:
            "M56 - DUNG DỊCH VỆ SINH XÀ SÀNG TỬ CLEAN & FRESH (ANTIBACTERIAL LOTION)",
          desc: "M56 Dung Dịch Vệ Sinh Xà Sàng Tử Clean & Fresh là dòng sản phẩm chăm sóc vùng da nhạy cảm, được thiết kế với công thức dịu nhẹ và tinh chiết thiên nhiên. Sản phẩm giúp hỗ trợ làm sạch nhẹ nhàng, hỗ trợ giảm cảm giác ẩm ướt, khó chịu, đồng thời giữ cho vùng da nhạy cảm luôn khô thoáng, mát mẻ. Các chiết xuất đặc trưng như Xà sàng tử, Forsythia, Sophora, Gừng núi, Dâm dương hoắc... không chỉ làm dịu mà còn hỗ trợ tăng cường bảo vệ vùng da mỏng manh dưới những tác động từ môi trường.",
          link: "https://mailisa.com/san-pham/m56-dung-dich-ve-sinh-xa-sang-tu-clean-fresh/",
          img: require("@/assets/imgs/AllCosmetics/M56.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M56.jpg",
          oldPrice: 350000,
          newPrice: 250000,
        },
        {
          index: 23,
          title: "M57 - DUNG DỊCH VỆ SINH SAFFRON (ANTIBACTERIAL GEL TYPE I)",
          desc: "M57 Dung Dịch Vệ Sinh Saffron là dòng dung dịch vệ sinh chuyên sâu giúp làm sạch, giúp kháng khuẩn, chống mùi mà vẫn dịu nhẹ",
          link: "https://mailisa.com/san-pham/m57-dung-dich-ve-sinh-saffron/",
          img: require("@/assets/imgs/AllCosmetics/M57.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M57.jpg",
          oldPrice: 380000,
          newPrice: 300000,
        },
        {
          index: 24,
          title: "M59 - MẶT NẠ HỖ TRỢ DƯỠNG ẨM GIÚP LÀM SÁNG DA TAY",
          desc: "M59 Mặt Nạ Hỗ Trợ Dưỡng Ẩm Giúp Làm Sáng Da Tay là giải pháp chăm sóc chuyên sâu dành riêng cho vùng da tay – khu vực thường xuyên tiếp xúc với ánh nắng, hóa chất và thiếu độ ẩm.",
          link: "https://mailisa.com/m59-mat-na-ho-tro-duong-am-giup-lam-sang-da-tay/",
          img: require("@/assets/imgs/AllCosmetics/M59.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M59.jpg",
          oldPrice: 320000,
          newPrice: 220000,
        },
        {
          index: 25,
          title: "M60 - MẶT NẠ HỖ TRỢ DƯỠNG ẨM & TƯƠI SÁNG DA CHÂN",
          desc: "M60 Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Tươi Sáng Da Chân là dòng mặt nạ dưỡng da chân chuyên sâu giúp làm mềm vùng gót nứt, dưỡng sáng da bàn chân",
          link: "https://mailisa.com/m60-mat-na-ho-tro-duong-am-tuoi-sang-da-chan/",
          img: require("@/assets/imgs/AllCosmetics/M60.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M60.jpg",
          oldPrice: 320000,
          newPrice: 220000,
        },
        {
          index: 26,
          title: "M61 - Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Làm Mềm Da Chân",
          desc: "M61 Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Làm Mềm Da Chân là dòng mặt nạ chăm sóc da chân chuyên sâu, giúp hỗ trợ làm sạch tế bào chết và làm mềm lớp sừng dày ở gót chân, lòng bàn chân. Sản phẩm kết hợp dưỡng chất từ chiết xuất sâm Panax Ginseng – sữa dê – Niacinamide – Hyaluronate, giúp hỗ trợ làm sạch, cấp ẩm, cải thiện sắc tố và hồi phục vùng da chân thô ráp. Sau mỗi lần sử dụng, làn da chân trở nên mềm mại, sáng khỏe, sạch mịn và tươi mới.",
          link: "https://mailisa.com/san-pham/m61-mat-na-ho-tro-duong-am-lam-mem-da-chan/",
          img: require("@/assets/imgs/AllCosmetics/M61.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M61.jpg",
          oldPrice: 340000,
          newPrice: 240000,
        },
        {
          index: 27,
          title: "M62 - Serum Hỗ Trợ Độ Ẩm Da Doctor Magic",
          desc: "M62 Serum Hỗ Trợ Độ Ẩm Da là dòng serum chuyên sâu giúp hỗ trợ tăng cường độ ẩm, cải thiện độ săn chắc và đàn hồi da. Nhờ kết hợp Collagen thủy phân – Elastin – Hyaluronic Acid – Beta-glucan – Chiết xuất thực vật, sản phẩm không chỉ giữ ẩm mà còn giảm rõ cảm giác khô căng, hỗ trợ cải thiện độ đàn hồi da như da chùng nhão, kém săn chắc. Kết cấu mỏng nhẹ – thẩm thấu nhanh – không nhờn rít, phù hợp cả với da dầu cần dưỡng nhẹ.",
          link: "https://mailisa.com/san-pham/m62-serum-ho-tro-do-am-da-doctor-magic/",
          img: require("@/assets/imgs/AllCosmetics/M62.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M62.jpg",
          oldPrice: 470000,
          newPrice: 380000,
        },
        {
          index: 28,
          title: "M63 - SERUM DƯỠNG DA SĂN CHẮC & CĂNG MỊN",
          desc: "M63 Serum Hỗ Trợ Dưỡng Da Mịn Màng giúp hỗ trợ tăng độ săn chắc – đàn hồi da, đồng thời dưỡng ẩm sâu và hỗ trợ phục hồi cấu trúc da khỏe mạnh. Công thức kết hợp giữa Collagen thủy phân – Elastin – Hyaluronic Acid – Beta-glucan – Chiết xuất thảo dược quý như Mẫu đơn, Tán xạ Nhật Bản, Tuyết bá mang lại hiệu quả dưỡng da toàn diện: mềm mịn, sáng khỏe và tươi tắn mỗi ngày. Kết cấu nhẹ, dễ thẩm thấu, không gây nhờn rít, phù hợp với mọi loại da.",
          link: "https://mailisa.com/san-pham/m63-serum-duong-da-san-chac-cang-min/",
          img: require("@/assets/imgs/AllCosmetics/M63.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M63.jpg",
          oldPrice: 450000,
          newPrice: 350000,
        },
        {
          index: 29,
          title: "M64 Tẩy Tế Bào Chết Body Hỗ Trợ Dưỡng Da Sáng Mịn",
          desc: "M64 Tẩy Tế Bào Chết Body Hỗ Trợ Dưỡng Da Sáng Mịn là dòng sản phẩm giúp làm sạch lớp tế bào già cỗi, dưỡng ẩm, giúp da sáng , mềm mịn",
          link: "https://mailisa.com/san-pham/m64-tay-te-bao-chet-body-ho-tro-duong-da-sang-min/",
          img: require("@/assets/imgs/AllCosmetics/M64.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M64.jpg",
          oldPrice: 320000,
          newPrice: 220000,
        },
        {
          index: 30,
          title: "M65 Sữa Rửa Mặt Giúp Hỗ Trợ Làm Sạch Da Dầu, Da Hỗn Hợp",
          desc: "M65 Sữa Rửa Mặt Giúp Hỗ Trợ Làm Sạch Da Dầu, Da Hỗn Hợp là dòng sữa rửa mặt hỗ trợ làm sạch sâu và kiểm soát nhờn vượt trội, giúp làm sạch bụi bẩn, bã nhờn và cặn trang điểm, thông thoáng lỗ chân lông. Với sự kết hợp của acid béo làm sạch – chiết xuất trà xanh – lựu – dừa – tảo vi sinh, sản phẩm mang lại cảm giác sạch thoáng, dễ chịu, hỗ trợ se khít lỗ chân lông, hạn chế mụn đầu đen và mang lại làn da sáng khỏe – mịn màng – tươi mới mỗi ngày.",
          link: "https://mailisa.com/san-pham/m65-sua-rua-mat-giup-ho-tro-da-dau/",
          img: require("@/assets/imgs/AllCosmetics/M65.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M65.jpg",
          oldPrice: 280000,
          newPrice: 199000,
        },
        {
          index: 31,
          title: "M66 - KEM DƯỠNG DA DÀNH CHO DA DẦU VÀ DỄ GÂY MỤN",
          desc: "M66 Kem Dưỡng Da Dành Cho Da Dầu Và Dễ Gây Mụn là sản phẩm kem dưỡng da chuyên biệt: Hỗ trợ giảm mụn, kiểm soát bã nhờn và làm dịu vùng da nhạy cảm.",
          link: "https://mailisa.com/m66-kem-duong-da-danh-cho-da-dau-va-de-gay-mun/",
          img: require("@/assets/imgs/AllCosmetics/M66.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M66.jpg",
          oldPrice: 350000,
          newPrice: 249000,
        },
        {
          index: 32,
          title: "M67 Serum Hỗ Trợ Giảm Mụn, Cấp Ẩm Cho Da Mịn Màng",
          desc: "M67 Serum Hỗ Trợ Giảm Mụn, Cấp Ẩm Cho Da Mịn Màng là dòng serum chuyên biệt hỗ trợ giảm tình trạng mụn, làm dịu da và cung cấp độ ẩm sâu, giúp làn da thông thoáng, mềm mịn và khỏe hơn mỗi ngày. Thành phần từ thiên nhiên: Witch Hazel, Rau má, thảo dược truyền thống, kết hợp cùng Probiotic lên men & Hyaluronic Acid",
          link: "https://mailisa.com/san-pham/m67-serum-ho-tro-giam-mun-cap-am-cho-da-min-mang/",
          img: require("@/assets/imgs/AllCosmetics/M67.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M67.jpg",
          oldPrice: 390000,
          newPrice: 290000,
        },
        {
          index: 33,
          title: "M68 TINH CHẤT CẤP ẨM & LÀM MỊN CHO DA MỤN, DA DẦU",
          desc: "M68 Tinh chất hỗ trợ cấp ẩm & làm mịn cho da mụn, da dầu là dòng tinh chất giúp kháng khuẩn, làm dịu da, giảm mụn, giúp da sáng khỏe, chống oxy hóaHỗ trợ cân bằng độ ẩm tự nhiên, hỗ trợ làm mềm da và se khít lỗ chân lông.Hỗ trợ làm dịu vùng da mụn, giảm sưng đỏ, hỗ trợ kiểm soát bã nhờn.Hỗ trợ làm sạch da, duy trì độ thông thoáng – từ đó hạn chế nguyên nhân gây mụn trở lại.Hỗ trợ phục hồi da, mang lại làn da mịn màng, khỏe khoắn, giảm tình trạng kích ứng.",
          link: "https://mailisa.com/san-pham/m68-tinh-chat-ho-tro-cap-am-lam-min-cho-da-mun-da-dau/",
          img: require("@/assets/imgs/AllCosmetics/M68.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M68.jpg",
          oldPrice: 280000,
          newPrice: 199000,
        },
        {
          index: 34,
          title: "M69 MẶT NẠ CHO DA MỤN NHỜN",
          desc: "M69 Mặt Nạ Dành Cho Da Mụn Nhờn là dòng mặt nạ bột chuyên biệt cho da dầu mụn, giúp hỗ trợ hút sạch dầu thừa – làm dịu các nốt mụn – làm sạch sâu lỗ chân lông. Công thức chứa tinh chất đất tảo, bột bắp biến tính, menthol, tinh dầu cúc La Mã, kết hợp hoạt chất kháng khuẩn Hexamidine: hỗ trợ làm sạch da, giảm bóng dầu và mang lại cảm giác mát lạnh, thông thoáng sau khi dùng",
          link: "https://mailisa.com/san-pham/m69-mat-na-cho-da-mun-nhon/",
          img: require("@/assets/imgs/AllCosmetics/M69-1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M69-1.jpg",
          oldPrice: 350000,
          newPrice: 280000,
        },
        {
          index: 35,
          title: "M70 - Kem Niacinamide Hỗ Trợ Dưỡng Sáng Da",
          desc: "M70 Kem Niacinamide Hỗ Trợ Dưỡng Sáng Da là sản phẩm giúp giảm mụn trên da, giúp bổ sung độ ẩm cho da, giúp dưỡng sáng da, giúp da trở nên sáng và mịn màng",
          link: "https://mailisa.com/san-pham/kem-niacinamide-ho-tro-duong-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M70.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/10/M70.jpg",
          oldPrice: 380000,
          newPrice: 300000,
        },
        {
          index: 36,
          title: "M59.1 MIẾNG MẶT NẠ HỖ TRỢ DƯỠNG ẨM GIÚP LÀM SÁNG DA TAY",
          desc: "M59.1 Miếng Mặt Nạ Hỗ Trợ Dưỡng Ẩm Giúp Làm Sáng Da Tay là giải pháp chăm sóc chuyên sâu dành riêng cho vùng da tay – khu vực thường xuyên tiếp xúc với ánh nắng, hóa chất và thiếu độ ẩm.",
          link: "https://mailisa.com/san-pham/m59-1-mieng-mat-na-ho-tro-duong-am-giup-lam-sang-da-tay/",
          img: require("@/assets/imgs/AllCosmetics/m59.1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/11/m59.1.jpg",
          oldPrice: 64000,
          newPrice: 60000,
        },
        {
          index: 37,
          title: "M59.2 MIẾNG MẶT NẠ HỖ TRỢ DƯỠNG ẨM GIÚP LÀM SÁNG DA TAY",
          desc: "M59.2 Miếng Mặt Nạ Hỗ Trợ Dưỡng Ẩm Giúp Làm Sáng Da Tay là giải pháp chăm sóc chuyên sâu dành riêng cho vùng da tay – khu vực thường xuyên tiếp xúc với ánh nắng, hóa chất và thiếu độ ẩm",
          link: "https://mailisa.com/san-pham/m59-2-mieng-mat-na-ho-tro-duong-am-giup-lam-sang-da-tay/",
          img: require("@/assets/imgs/AllCosmetics/m59.2.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/11/m59.2.jpg",
          oldPrice: 128000,
          newPrice: 100000,
        },
        {
          index: 38,
          title: "M60.1 MIẾNG MẶT NẠ DƯỠNG ẨM GIÚP LÀM TRẮNG DA CHÂN",
          desc: "M60.1 1 Miếng Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Tươi Sáng Da Chân là dòng mặt nạ dưỡng da chân chuyên sâu giúp làm mềm vùng gót nứt, dưỡng sáng da bàn chân",
          link: "https://mailisa.com/san-pham/m60-1-1-mieng-mat-na-ho-tro-duong-am-tuoi-sang-da-chan/",
          img: require("@/assets/imgs/AllCosmetics/m60.1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/11/m60.1.jpg",
          oldPrice: 64000,
          newPrice: 60000,
        },
        {
          index: 39,
          title: "M61.1 - 1 Miếng Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Làm Mềm Da Chân",
          desc: "M61.1 - 1 Miếng Mặt Nạ Hỗ Trợ Dưỡng Ẩm & Làm Mềm Da Chân là dòng mặt nạ chăm sóc da chân chuyên sâu, giúp hỗ trợ làm sạch tế bào chết và làm mềm lớp sừng dày ở gót chân, lòng bàn chân. Sản phẩm kết hợp dưỡng chất từ chiết xuất sâm Panax Ginseng – sữa dê – Niacinamide – Hyaluronate, giúp hỗ trợ làm sạch, cấp ẩm, cải thiện sắc tố và hồi phục vùng da chân thô ráp. Sau mỗi lần sử dụng, làn da chân trở nên mềm mại, sáng khỏe, sạch mịn và tươi mới",
          link: "https://mailisa.com/san-pham/m61-1-1-mieng-mat-na-ho-tro-duong-am-lam-mem-da-chan/",
          img: require("@/assets/imgs/AllCosmetics/m61.1.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2024/11/m61.1.jpg",
          oldPrice: 80000,
          newPrice: 70000,
        },
      ],

      listIntroViews: [
        {
          index: 1,
          title: "M49 – KEM DƯỠNG DA MỀM MỊN SÁNG DA",
          link: "https://mailisa.com/m49-kem-duong-da-mem-min-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M49.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M49.jpg",
          
        },
        {
          index: 2,
          title: "M49 – KEM DƯỠNG DA MỀM MỊN SÁNG DA",
          link: "https://mailisa.com/m49-kem-duong-da-mem-min-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M49.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M49.jpg",
          
        },

        {
          index: 5,
          title: "MS09 - TINH CHẤT DƯỠNG LÔNG MÀY, MI",
          link: "https://mailisa.com/ms09-tinh-chat-duong-long-may-mi/",
          img: require("@/assets/imgs/AllCosmetics/MS09.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/MS09.jpg",
          
        },
        {
          index: 6,
          title: "MS09 - TINH CHẤT DƯỠNG LÔNG MÀY, MI",
          link: "https://mailisa.com/ms09-tinh-chat-duong-long-may-mi/",
          img: require("@/assets/imgs/AllCosmetics/MS09.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/MS09.jpg",
          
        },
        {
          index: 7,
          title: "M55 – KEM TẨY TẾ BÀO CHẾT DA MẶT",
          link: "https://mailisa.com/m55-kem-tay-te-bao-chet-mat-hat-min/",
          img: require("@/assets/imgs/AllCosmetics/M55.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M55.jpg",
          
        },
        {
          index: 8,
          title: "M55 – KEM TẨY TẾ BÀO CHẾT DA MẶT",
          link: "https://mailisa.com/m55-kem-tay-te-bao-chet-mat-hat-min/",
          img: require("@/assets/imgs/AllCosmetics/M55.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M55.jpg",
          
        },
        {
          index: 9,
          title: "M64 – TẨY TẾ BÀO CHẾT BODY  DƯỠNG DA SÁNG KHỎE DA",
          link: "https://mailisa.com/san-pham/m64-tay-te-bao-chet-body-duong-da-sang-khoe-da/",
          img: require("@/assets/imgs/AllCosmetics/M64.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M64.jpg",
          
        },
        {
          index: 10,
          title: "M64 – TẨY TẾ BÀO CHẾT BODY  DƯỠNG DA SÁNG KHỎE DA",
          link: "https://mailisa.com/san-pham/m64-tay-te-bao-chet-body-duong-da-sang-khoe-da/",
          img: require("@/assets/imgs/AllCosmetics/M64.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M64.jpg",
          
        },
        {
          index: 11,
          title: "M49 – KEM DƯỠNG DA MỀM MỊN SÁNG DA",
          link: "https://mailisa.com/m49-kem-duong-da-mem-min-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M49.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M49.jpg",
          
        },
        {
          index: 12,
          title: "M49 – KEM DƯỠNG DA MỀM MỊN SÁNG DA",
          link: "https://mailisa.com/m49-kem-duong-da-mem-min-sang-da/",
          img: require("@/assets/imgs/AllCosmetics/M49.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M49.jpg",
          
        },

        {
          index: 15,
          title: "MS09 - TINH CHẤT DƯỠNG LÔNG MÀY, MI",
          link: "https://mailisa.com/ms09-tinh-chat-duong-long-may-mi/",
          img: require("@/assets/imgs/AllCosmetics/MS09.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/MS09.jpg",
          
        },
        {
          index: 16,
          title: "MS09 - TINH CHẤT DƯỠNG LÔNG MÀY, MI",
          link: "https://mailisa.com/ms09-tinh-chat-duong-long-may-mi/",
          img: require("@/assets/imgs/AllCosmetics/MS09.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/MS09.jpg",
          
        },
        {
          index: 17,
          title: "M55 – KEM TẨY TẾ BÀO CHẾT DA MẶT",
          link: "https://mailisa.com/m55-kem-tay-te-bao-chet-mat-hat-min/",
          img: require("@/assets/imgs/AllCosmetics/M55.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M55.jpg",
          
        },
        {
          index: 18,
          title: "M55 – KEM TẨY TẾ BÀO CHẾT DA MẶT",
          link: "https://mailisa.com/m55-kem-tay-te-bao-chet-mat-hat-min/",
          img: require("@/assets/imgs/AllCosmetics/M55.jpg"),
          src: "https://mailisa.com/wp-content/uploads/2025/06/M55.jpg",
          
        },
      ],
      settingsIntroView: {
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      },
      settingsPress: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        pauseOnHover: true,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      },
      pressLogos: [
        require("@/assets/imgs/Bitmap-7.png"),
        require("@/assets/imgs/Bitmap-8.png"),
        require("@/assets/imgs/Bitmap-9.png"),
        require("@/assets/imgs/789.png"),
        require("@/assets/imgs/0909.png"),
        require("@/assets/imgs/1023.png"),
        require("@/assets/imgs/1122.png"),
        require("@/assets/imgs/78970.png"),
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.introview::before {
  top: -8%;
  transform: translateX(-50%) rotate(180deg);
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

.introview::after {
  bottom: -8%;
  background-position-x: center;
  background-image: url("@/assets/imgs/pattern_new_1.png");
}

</style>
