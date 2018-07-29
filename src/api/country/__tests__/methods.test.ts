import { list } from '../methods';

describe('src/api/country/methods.ts', () => {
    describe('list', () => {
        it('Should return correct result', async () => {
            const response = [
                { id: 1, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/1.png", title: "Afghanistan" },
                { id: 3, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/3.png", title: "Albania" },
                { id: 4, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/4.png", title: "Algeria" },
                { id: 239, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/239.png", title: "American Samoa" },
                { id: 234, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/234.png", title: "American Virgin Islands" },
                { id: 5, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/5.png", title: "Andorra" },
                { id: 6, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/6.png", title: "Angola" },
                { id: 232, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/232.png", title: "Anguilla" },
                { id: 7, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/7.png", title: "Antigua and Barbuda", },
                { id: 9, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/9.png", title: "Argentina", },
                { id: 10, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/10.png", title: "Armenia", },
                { id: 233, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/233.png", title: "Aruba", },
                { id: 12, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/12.png", title: "Australia", },
                { id: 127, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/127.png", title: "Austria", },
                { id: 13, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/13.png", title: "Azerbaijan", },
                { id: 14, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/14.png", title: "Bahamas", },
                { id: 15, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/15.png", title: "Bahrain", },
                { id: 16, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/16.png", title: "Bangladesh", },
                { id: 17, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/17.png", title: "Barbados", },
                { id: 18, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/18.png", title: "Belarus", },
                { id: 19, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/19.png", title: "Belgium", },
                { id: 20, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/20.png", title: "Belize", },
                { id: 21, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/21.png", title: "Benin", },
                { id: 211, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/211.png", title: "Bermuda", },
                { id: 22, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/22.png", title: "Bhutan", },
                { id: 23, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/23.png", title: "Bolivia", },
                { id: 269, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/269.png", title: "Bonaire", },
                { id: 24, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/24.png", title: "Bosnia-Herzegovina", },
                { id: 25, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/25.png", title: "Botsuana", },
                { id: 26, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/26.png", title: "Brazil", },
                { id: 231, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/231.png", title: "British Virgin Islands", },
                { id: 27, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/27.png", title: "Brunei Darussalam", },
                { id: 28, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/28.png", title: "Bulgaria", },
                { id: 29, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/29.png", title: "Burkina Faso", },
                { id: 30, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/30.png", title: "Burundi", },
                { id: 79, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/79.png", title: "Cambodia", },
                { id: 31, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/31.png", title: "Cameroon", },
                { id: 80, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/80.png", title: "Canada", },
                { id: 32, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/32.png", title: "Cape Verde", },
                { id: 229, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/229.png", title: "Cayman-Inseln", },
                { id: 138, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/138.png", title: "Central African Republic", },
                { id: 171, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/171.png", title: "Chad", },
                { id: 33, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/33.png", title: "Chile", },
                { id: 34, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/34.png", title: "China", },
                { id: 164, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/164.png", title: "Chinese Taipei (Taiwan)", },
                { id: 83, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/83.png", title: "Colombia", },
                { id: 35, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/35.png", title: "Comoros", },
                { id: 85, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/85.png", title: "Congo", },
                { id: 238, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/238.png", title: "Cookinseln", },
                { id: 36, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/36.png", title: "Costa Rica", },
                { id: 38, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/38.png", title: "Cote d'Ivoire", },
                { id: 37, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/37.png", title: "Croatia", },
                { id: 88, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/88.png", title: "Cuba", },
                { id: 260, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/260.png", title: "Curacao", },
                { id: 188, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/188.png", title: "Cyprus", },
                { id: 172, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/172.png", title: "Czech Republic", },
                { id: 39, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/39.png", title: "Denmark", },
                { id: 41, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/41.png", title: "Djibouti", },
                { id: 42, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/42.png", title: "Dominica", },
                { id: 43, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/43.png", title: "Dominican Republic", },
                { id: 193, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/193.png", title: "DR Congo", },
                { id: 44, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/44.png", title: "Ecuador", },
                { id: 2, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/2.png", title: "Egypt", },
                { id: 45, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/45.png", title: "El Salvador", },
                { id: 189, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/189.png", title: "England", },
                { id: 8, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/8.png", title: "Equatorial Guinea", },
                { id: 46, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/46.png", title: "Eritrea", },
                { id: 47, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/47.png", title: "Estonia", },
                { id: 11, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/11.png", title: "Ethiopia", },
                { id: 250, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/250.png", title: "Falkland Islands", },
                { id: 208, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/208.png", title: "Faroe Island", },
                { id: 111, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/111.png", title: "Federated States of Micronesia", },
                { id: 48, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/48.png", title: "Fiji", },
                { id: 49, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/49.png", title: "Finland", },
                { id: 50, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/50.png", title: "France", },
                { id: 252, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/252.png", title: "French Guiana", },
                { id: 51, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/51.png", title: "Gabon", },
                { id: 53, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/53.png", title: "Georgia", },
                { id: 40, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/40.png", title: "Germany", },
                { id: 54, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/54.png", title: "Ghana", },
                { id: 266, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/266.png", title: "Gibraltar", },
                { id: 56, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/56.png", title: "Greece", },
                { id: 243, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/243.png", title: "Greenland", },
                { id: 55, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/55.png", title: "Grenada", },
                { id: 251, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/251.png", title: "Guadeloupe", },
                { id: 241, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/241.png", title: "Guam", },
                { id: 58, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/58.png", title: "Guatemala", },
                { id: 59, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/59.png", title: "Guinea", },
                { id: 60, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/60.png", title: "Guinea-Bissau", },
                { id: 61, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/61.png", title: "Guyana", },
                { id: 62, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/62.png", title: "Haiti", },
                { id: 66, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/66.png", title: "Honduras", },
                { id: 218, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/218.png", title: "Hongkong", },
                { id: 178, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/178.png", title: "Hungary", },
                { id: 73, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/73.png", title: "Iceland", },
                { id: 67, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/67.png", title: "India", },
                { id: 68, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/68.png", title: "Indonesia", },
                { id: 71, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/71.png", title: "Iran", },
                { id: 70, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/70.png", title: "Iraq", },
                { id: 72, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/72.png", title: "Ireland", },
                { id: 74, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/74.png", title: "Israel", },
                { id: 75, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/75.png", title: "Italy", },
                { id: 76, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/76.png", title: "Jamaica", },
                { id: 77, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/77.png", title: "Japan", },
                { id: 78, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/78.png", title: "Jordan", },
                { id: 81, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/81.png", title: "Kazakhstan", },
                { id: 82, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/82.png", title: "Kenya", },
                { id: 246, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/246.png", title: "Kiribati", },
                { id: 86, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/86.png", title: "Korea, North", },
                { id: 87, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/87.png", title: "Korea, South", },
                { id: 244, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/244.png", title: "Kosovo", },
                { id: 89, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/89.png", title: "Kuwait", },
                { id: 90, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/90.png", title: "Kyrgyzstan", },
                { id: 91, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/91.png", title: "Laos", },
                { id: 92, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/92.png", title: "Latvia", },
                { id: 94, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/94.png", title: "Lebanon", },
                { id: 93, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/93.png", title: "Lesotho", },
                { id: 95, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/95.png", title: "Liberia", },
                { id: 96, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/96.png", title: "Libya", },
                { id: 97, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/97.png", title: "Liechtenstein", },
                { id: 98, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/98.png", title: "Lithuania", },
                { id: 99, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/99.png", title: "Luxembourg", },
                { id: 219, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/219.png", title: "Macao", },
                { id: 100, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/100.png", title: "Macedonia", },
                { id: 101, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/101.png", title: "Madagascar", },
                { id: 102, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/102.png", title: "Malawi", },
                { id: 103, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/103.png", title: "Malaysia", },
                { id: 104, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/104.png", title: "Maldives", },
                { id: 105, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/105.png", title: "Mali", },
                { id: 106, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/106.png", title: "Malta", },
                { id: 268, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/268.png", title: "Mariana Islands", },
                { id: 257, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/257.png", title: "Marshall Islands", },
                { id: 207, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/207.png", title: "Martinique", },
                { id: 108, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/108.png", title: "Mauritania", },
                { id: 109, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/109.png", title: "Mauritius", },
                { id: 110, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/110.png", title: "Mexico", },
                { id: 112, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/112.png", title: "Moldova", },
                { id: 113, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/113.png", title: "Monaco", },
                { id: 114, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/114.png", title: "Mongolia", },
                { id: 216, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/216.png", title: "Montenegro", },
                { id: 235, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/235.png", title: "Montserrat", },
                { id: 107, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/107.png", title: "Morocco", },
                { id: 115, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/115.png", title: "Mozambique", },
                { id: 116, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/116.png", title: "Myanmar", },
                { id: 117, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/117.png", title: "Namibia", },
                { id: 118, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/118.png", title: "Nauru", },
                { id: 119, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/119.png", title: "Nepal", },
                { id: 122, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/122.png", title: "Netherlands", },
                { id: 236, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/236.png", title: "Neukaledonien", },
                { id: 120, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/120.png", title: "New Zealand", },
                { id: 121, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/121.png", title: "Nicaragua", },
                { id: 123, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/123.png", title: "Niger", },
                { id: 124, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/124.png", title: "Nigeria", },
                { id: 261, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/261.png", title: "Niue", },
                { id: 192, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/192.png", title: "Northern Ireland", },
                { id: 125, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/125.png", title: "Norway", },
                { id: 126, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/126.png", title: "Oman", },
                { id: 242, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/242.png", title: "Osttimor", },
                { id: 128, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/128.png", title: "Pakistan", },
                { id: 240, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/240.png", title: "Palästina", },
                { id: 129, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/129.png", title: "Palau", },
                { id: 130, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/130.png", title: "Panama", },
                { id: 131, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/131.png", title: "Papua New Guinea", },
                { id: 132, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/132.png", title: "Paraguay", },
                { id: 133, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/133.png", title: "Peru", },
                { id: 134, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/134.png", title: "Philippines", },
                { id: 135, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/135.png", title: "Poland", },
                { id: 136, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/136.png", title: "Portugal", },
                { id: 228, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/228.png", title: "Puerto Rico", },
                { id: 137, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/137.png", title: "Qatar", },
                { id: 249, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/249.png", title: "Réunion", },
                { id: 140, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/140.png", title: "Romania", },
                { id: 141, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/141.png", title: "Russia", },
                { id: 139, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/139.png", title: "Rwanda", },
                { id: 267, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/267.png", title: "Saint-Martin", },
                { id: 143, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/143.png", title: "Samoa", },
                { id: 144, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/144.png", title: "San Marino", },
                { id: 145, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/145.png", title: "Sao Tome and Principe", },
                { id: 146, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/146.png", title: "Saudi Arabia", },
                { id: 190, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/190.png", title: "Scotland", },
                { id: 149, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/149.png", title: "Senegal", },
                { id: 215, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/215.png", title: "Serbia", },
                { id: 151, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/151.png", title: "Seychelles", },
                { id: 152, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/152.png", title: "Sierra Leone", },
                { id: 153, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/153.png", title: "Singapore", },
                { id: 265, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/265.png", title: "Sint Maarten", },
                { id: 154, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/154.png", title: "Slovakia", },
                { id: 155, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/155.png", title: "Slovenia", },
                { id: 69, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/69.png", title: "Solomon Islands", },
                { id: 156, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/156.png", title: "Somalia", },
                { id: 159, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/159.png", title: "South Africa", },
                { id: 262, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/262.png", title: "Southern Sudan", },
                { id: 157, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/157.png", title: "Spain", },
                { id: 158, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/158.png", title: "Sri Lanka", },
                { id: 225, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/225.png", title: "St. Kitts &amp; Nevis", },
                { id: 230, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/230.png", title: "St. Lucia", },
                { id: 224, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/224.png", title: "St. Vincent &amp; Grenadinen", },
                { id: 160, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/160.png", title: "Sudan", },
                { id: 161, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/161.png", title: "Suriname", },
                { id: 162, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/162.png", title: "Swaziland", },
                { id: 147, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/147.png", title: "Sweden", },
                { id: 148, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/148.png", title: "Switzerland", },
                { id: 163, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/163.png", title: "Syria", },
                { id: 237, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/237.png", title: "Tahiti", },
                { id: 165, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/165.png", title: "Tajikistan", },
                { id: 166, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/166.png", title: "Tanzania", },
                { id: 167, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/167.png", title: "Thailand", },
                { id: 52, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/52.png", title: "The Gambia", },
                { id: 245, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/245.png", title: "Tibet", },
                { id: 168, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/168.png", title: "Togo", },
                { id: 169, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/169.png", title: "Tonga", },
                { id: 170, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/170.png", title: "Trinidad and Tobago", },
                { id: 173, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/173.png", title: "Tunisia", },
                { id: 174, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/174.png", title: "Turkey", },
                { id: 175, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/175.png", title: "Turkmenistan", },
                { id: 226, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/226.png", title: "Turks- and Caicosinseln", },
                { id: 247, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/247.png", title: "Tuvalu", },
                { id: 176, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/176.png", title: "Uganda", },
                { id: 177, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/177.png", title: "Ukraine", },
                { id: 183, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/183.png", title: "United Arab Emirates", },
                { id: 184, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/184.png", title: "United States", },
                { id: 179, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/179.png", title: "Uruguay", },
                { id: 180, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/180.png", title: "Uzbekistan", },
                { id: 181, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/181.png", title: "Vanuatu", },
                { id: 256, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/256.png", title: "Vatican", },
                { id: 182, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/182.png", title: "Venezuela", },
                { id: 185, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/185.png", title: "Vietnam", },
                { id: 191, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/191.png", title: "Wales", },
                { id: 186, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/186.png", title: "Yemen", },
                { id: 142, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/142.png", title: "Zambia", },
                { id: 253, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/253.png", title: "Zanzibar", },
                { id: 187, flagUrl: "https://tmssl.akamaized.net//images/flagge/small/187.png", title: "Zimbabwe", },
            ];
            await expect(list()).resolves.toEqual(response);
        });
    });
});
