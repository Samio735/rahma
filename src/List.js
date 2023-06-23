import EmptyListText from "./EmptyListText";
import WhiteNavBar from "./WhiteNavBar";
import Footer from "./footer";

function List() {
  return (
    <div className="text-dark-green bg-white-text z-[-5] relative">
      <div className="behind absolute top-0 w-screen h-[250px] bg-white-text -z-10"></div>

      <WhiteNavBar />
      <EmptyListText />

      <div className="bg-black lg:px-20 absolute bottom-0 w-screen lg:py-10 grid grid-cols-2 lg:justify-between lg:items-center z-[40] text-white-text ">
        <div className="flex-col justify-center lg:justify-start p-10 pb-[85px] lg:pb-[200px]">
          <h1 className="text-xl  font-bold mb-4">
            تابعنا على مواقع التواصل الإجتماعي
          </h1>
          <div className="flex justify-end">
            <a href="https://www.facebook.com/rahma.tn.official">
              <svg
                className="lg:w-17 w-10  mr-2"
                viewBox="0 0 85 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.1411 7.08737C48.7256 7.07745 51.31 7.10342 53.8938 7.16528L54.5809 7.19007C55.3742 7.21841 56.1569 7.25382 57.1025 7.29632C60.8709 7.47341 63.4421 8.06841 65.6982 8.9432C68.0357 9.84278 70.0048 11.0611 71.974 13.0303C73.7745 14.7997 75.168 16.9401 76.0576 19.3026C76.9323 21.5586 77.5273 24.1334 77.7044 27.9017C77.7469 28.8438 77.7823 29.6301 77.8107 30.4234L77.8319 31.1105C77.8948 33.693 77.922 36.2764 77.9134 38.8597L77.9169 41.5017V46.1413C77.9257 48.7258 77.8985 51.3103 77.8355 53.894L77.8142 54.5811C77.7859 55.3745 77.7505 56.1572 77.708 57.1028C77.5309 60.8711 76.9288 63.4424 76.0576 65.6984C75.1709 68.0634 73.7771 70.2055 71.974 71.9742C70.203 73.7745 68.0616 75.168 65.6982 76.0578C63.4421 76.9326 60.8709 77.5276 57.1025 77.7047C56.1569 77.7472 55.3742 77.7826 54.5809 77.8109L53.8938 77.8322C51.3101 77.8951 48.7256 77.9223 46.1411 77.9136L43.499 77.9172H38.863C36.2785 77.9259 33.694 77.8987 31.1103 77.8357L30.4232 77.8145C29.5824 77.784 28.7418 77.7486 27.9015 77.7082C24.1332 77.5311 21.5619 76.929 19.3023 76.0578C16.9389 75.17 14.7982 73.7763 13.03 71.9742C11.2275 70.2044 9.83271 68.0627 8.94296 65.6984C8.06817 63.4424 7.47317 60.8711 7.29609 57.1028C7.25664 56.2624 7.22123 55.4218 7.18984 54.5811L7.17213 53.894C7.10683 51.3103 7.07732 48.7258 7.08359 46.1413V38.8597C7.0737 36.2764 7.09968 33.6931 7.1615 31.1105L7.1863 30.4234C7.21463 29.6301 7.25004 28.8438 7.29254 27.9017C7.46963 24.1299 8.06463 21.5622 8.93942 19.3026C9.8297 16.9389 11.2272 14.7992 13.0336 13.0338C14.8005 11.2302 16.9399 9.83419 19.3023 8.9432C21.5619 8.06841 24.1296 7.47341 27.9015 7.29632L30.4232 7.19007L31.1103 7.17237C33.6928 7.1071 36.2761 7.07759 38.8594 7.08382L46.1411 7.08737ZM42.5003 24.7957C40.1539 24.7625 37.8244 25.196 35.647 26.0709C33.4697 26.9459 31.488 28.2449 29.817 29.8924C28.146 31.5398 26.8192 33.503 25.9135 35.6678C25.0079 37.8325 24.5415 40.1557 24.5415 42.5023C24.5415 44.8488 25.0079 47.172 25.9135 49.3368C26.8192 51.5015 28.146 53.4647 29.817 55.1122C31.488 56.7597 33.4697 58.0586 35.647 58.9336C37.8244 59.8085 40.1539 60.242 42.5003 60.2088C47.1968 60.2088 51.701 58.3431 55.0219 55.0222C58.3429 51.7012 60.2086 47.197 60.2086 42.5005C60.2086 37.804 58.3429 33.2998 55.0219 29.9788C51.701 26.6579 47.1968 24.7957 42.5003 24.7957ZM42.5003 31.879C43.9116 31.853 45.314 32.1085 46.6256 32.6306C47.9371 33.1527 49.1314 33.9309 50.1388 34.9197C51.1462 35.9086 51.9465 37.0882 52.4929 38.3898C53.0392 39.6914 53.3208 41.0888 53.321 42.5005C53.3212 43.9121 53.0402 45.3096 52.4942 46.6114C51.9483 47.9131 51.1484 49.0931 50.1414 50.0823C49.1343 51.0714 47.9402 51.85 46.6289 52.3725C45.3175 52.8951 43.9152 53.151 42.5038 53.1255C39.6859 53.1255 36.9834 52.0061 34.9908 50.0135C32.9982 48.0209 31.8788 45.3184 31.8788 42.5005C31.8788 39.6826 32.9982 36.9801 34.9908 34.9875C36.9834 32.9949 39.6859 31.8755 42.5038 31.8755L42.5003 31.879ZM61.094 19.4832C59.9514 19.5289 58.8709 20.015 58.0786 20.8396C57.2864 21.6641 56.844 22.7633 56.844 23.9067C56.844 25.0502 57.2864 26.1494 58.0786 26.9739C58.8709 27.7985 59.9514 28.2846 61.094 28.3303C62.2681 28.3303 63.3942 27.8639 64.2244 27.0336C65.0547 26.2034 65.5211 25.0773 65.5211 23.9032C65.5211 22.7291 65.0547 21.603 64.2244 20.7728C63.3942 19.9425 62.2681 19.4761 61.094 19.4761V19.4832Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/rahma.tn.official/">
              <svg
                className="lg:w-17 w-10  mr-2"
                viewBox="0 0 86 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.2562 42.4997C78.2562 22.9497 62.3895 7.08301 42.8395 7.08301C23.2895 7.08301 7.42285 22.9497 7.42285 42.4997C7.42285 59.6413 19.6062 73.9143 35.7562 77.208V53.1247H28.6729V42.4997H35.7562V33.6455C35.7562 26.8101 41.3166 21.2497 48.152 21.2497H57.0062V31.8747H49.9229C47.9749 31.8747 46.3812 33.4684 46.3812 35.4163V42.4997H57.0062V53.1247H46.3812V77.7393C64.2666 75.9684 78.2562 60.8809 78.2562 42.4997Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rahma-tunisia/">
              <svg
                className="lg:w-17 w-10  mr-2"
                viewBox="0 0 86 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.4714 20.6125C57.0504 17.8487 55.7162 14.2992 55.7173 10.625H44.7735V54.5417C44.6891 56.9182 43.6858 59.1693 41.9748 60.8208C40.2638 62.4724 37.9786 63.3955 35.6006 63.3958C30.5714 63.3958 26.3923 59.2875 26.3923 54.1875C26.3923 48.0958 32.2714 43.5271 38.3277 45.4042V34.2125C26.1089 32.5833 15.4131 42.075 15.4131 54.1875C15.4131 65.9813 25.1881 74.375 35.5652 74.375C46.686 74.375 55.7173 65.3438 55.7173 54.1875V31.9104C60.155 35.0974 65.4829 36.8073 70.9464 36.7979V25.8542C70.9464 25.8542 64.2881 26.1729 59.4714 20.6125Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-white-text  text-right lg:leading-relaxed pb-[85px] lg:pb-[200px] p-10">
          <h1 className="text-xl  font-bold mb-2">تعاني من مشكل ؟</h1>
          <h2 className=" text-lg ">تواصل معنا على </h2>
          <h2 className="  text-lg underline ">0782277055</h2>
          <h2 className=" text-lg  underline">rahmadz@gmail.com </h2>
        </div>
      </div>
    </div>
  );
}

export default List;
