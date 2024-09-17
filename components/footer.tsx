import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(0deg, var(--Primary-Primary1000, #003C5D) 0%, var(--Primary-Primary1000, #003C5D) 100%)",
      }}
      className="py-10 xl:py-20"
    >
      <div className="container flex flex-wrap gap-10">
        <div>
          <Image
            src={"/images/white-logo.png"}
            alt="logo"
            width={160}
            height={83}
            quality={80}
          />
          <ul className="list-disc pt-5">
            <li className="text-white text-sm font-lato">Market Research</li>
            <li className="text-white text-sm font-lato">Retail Audits</li>
            <li className="text-white text-sm font-lato">Consumer insights</li>
            <li className="text-white text-sm font-lato">Mystery Shopping</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-bold uppercase text-white font-lato">
            For More
          </h4>
          <ul className="pt-4 space-y-2">
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/about-us"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/services"}
              >
                Services Offered
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/industries_clients"}
              >
                Industries & Clients
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/faqs"}
              >
                FAQ&apos;s
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/case-studies"}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-lato text-white opacity-80"
                href={"/contact-us"}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div>
            <h4 className="text-base font-bold uppercase text-white font-lato">
              TALK TO US
            </h4>
            <ul className="pt-4 space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.6362C11.7667 22.6362 11.5667 22.5696 11.4 22.4362C11.2333 22.3029 11.1083 22.1279 11.025 21.9112C10.7083 20.9779 10.3083 20.1029 9.825 19.2862C9.35833 18.4696 8.7 17.5112 7.85 16.4112C7 15.3112 6.30833 14.2612 5.775 13.2612C5.25833 12.2612 5 11.0529 5 9.63623C5 7.68623 5.675 6.03623 7.025 4.68623C8.39167 3.31956 10.05 2.63623 12 2.63623C13.95 2.63623 15.6 3.31956 16.95 4.68623C18.3167 6.03623 19 7.68623 19 9.63623C19 11.1529 18.7083 12.4196 18.125 13.4362C17.5583 14.4362 16.9 15.4279 16.15 16.4112C15.25 17.6112 14.5667 18.6112 14.1 19.4112C13.65 20.1946 13.275 21.0279 12.975 21.9112C12.8917 22.1446 12.7583 22.3279 12.575 22.4612C12.4083 22.5779 12.2167 22.6362 12 22.6362ZM12 12.1362C12.7 12.1362 13.2917 11.8946 13.775 11.4112C14.2583 10.9279 14.5 10.3362 14.5 9.63623C14.5 8.93623 14.2583 8.34456 13.775 7.86123C13.2917 7.3779 12.7 7.13623 12 7.13623C11.3 7.13623 10.7083 7.3779 10.225 7.86123C9.74167 8.34456 9.5 8.93623 9.5 9.63623C9.5 10.3362 9.74167 10.9279 10.225 11.4112C10.7083 11.8946 11.3 12.1362 12 12.1362Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <p className="text-base max-w-[304px] font-normal font-lato text-white opacity-80">
                  9 FloorWalk Consultants Private Limited AltF Empire Square,
                  MR-I, Unit 1, 3rd Floor, JMD Empire Square Near Sikanderpur
                  Metro Station, Opp. Metro Pillar No. 71, MG Road Gurugram,
                  Haryana -122002
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M15.0499 5.63623C16.0267 5.8268 16.9243 6.30449 17.628 7.00817C18.3317 7.71184 18.8094 8.6095 18.9999 9.58623M15.0499 1.63623C17.0792 1.86167 18.9715 2.77041 20.4162 4.21324C21.8608 5.65607 22.7719 7.54724 22.9999 9.57623M21.9999 17.5562V20.5562C22.0011 20.8347 21.944 21.1104 21.8324 21.3656C21.7209 21.6208 21.5572 21.8498 21.352 22.0381C21.1468 22.2264 20.9045 22.3697 20.6407 22.4589C20.3769 22.5482 20.0973 22.5813 19.8199 22.5562C16.7428 22.2219 13.7869 21.1704 11.1899 19.4862C8.77376 17.9509 6.72527 15.9024 5.18993 13.4862C3.49991 10.8774 2.44818 7.90722 2.11993 4.81623C2.09494 4.5397 2.12781 4.26099 2.21643 3.99785C2.30506 3.73472 2.4475 3.49292 2.6347 3.28785C2.82189 3.08278 3.04974 2.91894 3.30372 2.80675C3.55771 2.69457 3.83227 2.63649 4.10993 2.63623H7.10993C7.59524 2.63145 8.06572 2.80331 8.43369 3.11976C8.80166 3.43622 9.04201 3.87568 9.10993 4.35623C9.23656 5.3163 9.47138 6.25896 9.80993 7.16623C9.94448 7.52415 9.9736 7.91315 9.89384 8.28711C9.81408 8.66108 9.6288 9.00434 9.35993 9.27623L8.08993 10.5462C9.51349 13.0498 11.5864 15.1227 14.0899 16.5462L15.3599 15.2762C15.6318 15.0074 15.9751 14.8221 16.3491 14.7423C16.723 14.6626 17.112 14.6917 17.4699 14.8262C18.3772 15.1648 19.3199 15.3996 20.2799 15.5262C20.7657 15.5948 21.2093 15.8394 21.5265 16.2137C21.8436 16.588 22.0121 17.0658 21.9999 17.5562Z"
                    stroke="#FAFAFA"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-base max-w-[304px] font-normal font-lato text-white opacity-80">
                  +91-783-606-6777
                </p>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 20.6362C3.45 20.6362 2.975 20.4446 2.575 20.0612C2.19167 19.6612 2 19.1862 2 18.6362V6.63623C2 6.08623 2.19167 5.61956 2.575 5.23623C2.975 4.83623 3.45 4.63623 4 4.63623H20C20.55 4.63623 21.0167 4.83623 21.4 5.23623C21.8 5.61956 22 6.08623 22 6.63623V18.6362C22 19.1862 21.8 19.6612 21.4 20.0612C21.0167 20.4446 20.55 20.6362 20 20.6362H4ZM12 13.6362L20 8.63623V6.63623L12 11.6362L4 6.63623V8.63623L12 13.6362Z"
                    fill="#FAFAFA"
                  />
                </svg>

                <p className="text-base max-w-[304px] font-normal font-lato text-white opacity-80">
                  contactus@floorwalk.in
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end items-center gap-4">
            <li>
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={43}
                  height={40}
                  viewBox="0 0 43 40"
                  fill="none"
                >
                  <rect
                    opacity="0.25"
                    x="0.80835"
                    y="1.13623"
                    width="41.2306"
                    height={38}
                    rx={19}
                    stroke="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.313 27.6362V20.1356H17.6338V17.5508H19.313V15.9989C19.313 13.8902 20.2612 12.6362 22.955 12.6362H25.1978V15.2214H23.7959C22.7472 15.2214 22.6779 15.5826 22.6779 16.2568L22.6741 17.5505H25.2136L24.9165 20.1354H22.6741V27.6362H19.313Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={43}
                  height={40}
                  viewBox="0 0 43 40"
                  fill="none"
                >
                  <rect
                    opacity="0.25"
                    x="1.03882"
                    y="1.13623"
                    width="41.2306"
                    height={38}
                    rx={19}
                    stroke="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8642 26.6362H14.6157V17.6362H17.8642V26.6362Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2303 15.6362H16.2119C15.2424 15.6362 14.6157 14.9693 14.6157 14.1357C14.6157 13.2845 15.2615 12.6362 16.2493 12.6362C17.2372 12.6362 17.8455 13.2845 17.8642 14.1357C17.8642 14.9693 17.2372 15.6362 16.2303 15.6362Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.7752 26.636H26.583V21.9316C26.583 20.7499 26.1211 19.9436 24.9655 19.9436C24.0836 19.9436 23.5583 20.4872 23.3275 21.0122C23.2431 21.2004 23.2224 21.4625 23.2224 21.7253V26.6362H20.0298C20.0298 26.6362 20.0719 18.6681 20.0298 17.8429H23.2224V19.0884C23.6461 18.4897 24.4049 17.6362 26.0998 17.6362C28.2005 17.6362 29.7753 18.8933 29.7753 21.5942L29.7752 26.636Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={43}
                  height={40}
                  viewBox="0 0 43 40"
                  fill="none"
                >
                  <rect
                    opacity="0.25"
                    x="1.26953"
                    y="1.13623"
                    width="41.2306"
                    height={38}
                    rx={19}
                    stroke="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.6813 17.5624L21.7118 18.0382L21.2033 17.9799C19.3521 17.7566 17.7348 16.9992 16.3617 15.7272L15.6904 15.0961L15.5175 15.5622C15.1513 16.6011 15.3853 17.6983 16.1481 18.4363C16.555 18.8441 16.4634 18.9024 15.7616 18.6596C15.5175 18.5819 15.3039 18.5237 15.2836 18.5528C15.2124 18.6208 15.4565 19.5044 15.6497 19.8539C15.9142 20.3394 16.4533 20.8152 17.0432 21.0968L17.5416 21.3201L16.9517 21.3298C16.3821 21.3298 16.3617 21.3395 16.4227 21.5434C16.6262 22.1746 17.4297 22.8445 18.3248 23.1358L18.9554 23.3397L18.4061 23.6505C17.5924 24.0971 16.6363 24.3496 15.6802 24.369C15.2225 24.3787 14.8462 24.4175 14.8462 24.4467C14.8462 24.5438 16.0871 25.0875 16.8093 25.3011C18.9757 25.9323 21.5491 25.6604 23.4816 24.5826C24.8548 23.8155 26.2279 22.2911 26.8687 20.8152C27.2145 20.0287 27.5603 18.5916 27.5603 17.9022C27.5603 17.4556 27.5908 17.3973 28.1604 16.8633C28.4961 16.5526 28.8114 16.2127 28.8724 16.1156C28.9741 15.9312 28.964 15.9312 28.4452 16.0962C27.5807 16.3875 27.4586 16.3487 27.8858 15.9117C28.2011 15.601 28.5775 15.0379 28.5775 14.8728C28.5775 14.8437 28.4249 14.8922 28.252 14.9796C28.0689 15.0767 27.662 15.2223 27.3569 15.3097L26.8076 15.4748L26.3093 15.1544C26.0346 14.9796 25.6481 14.7854 25.4447 14.7271C24.926 14.5912 24.1326 14.6106 23.6647 14.766C22.3933 15.2029 21.5898 16.3293 21.6813 17.5624Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className="container pt-6 mt-8 border-t border-white/10">
        <p className="text-sm font-lato text-white font-normal text-center">
          © 2023 All Rights Reserved. @ Floorwalk Consultants Pvt Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
