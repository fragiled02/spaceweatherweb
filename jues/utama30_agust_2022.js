function alert1() { alert("Hello! You can click stuff to intecart! :)"); };
function alert1() { alert("Hello! You can click stuff to intecart! :)"); };
let s1 = 0;

function check_data(data) {
	try { data; return data; }
	catch (err) { return "IDK :("; };
};

function toggle_cpanel() {
	s1 += 1;
	switch (s1) {
		case 1:
			if (window.matchMedia("(orientation: portrait)").matches) {
				document.getElementById("mySidenav").style.width = "100%";
			}
			else {
				document.getElementById("mySidenav").style.width = "20%";
			};

			break; case 2:
			document.getElementById("mySidenav").style.width = "0px"; s1 = 0;
	}
}

const control_panel_btn = document.getElementById("webdar");
const control_panel_close_btn = document.getElementById("sidenav_left_close");
control_panel_btn.addEventListener("click", toggle_cpanel);
control_panel_close_btn.addEventListener("click", toggle_cpanel);



let menuvar = 0;
if (window.matchMedia("(orientation: landscape)").matches) { menuvar += 1; };
let menu_orientation = "none";
const menu_btn = document.getElementById("nav_menu");
const all_submenu = document.querySelectorAll(".nav_submenu");
const all_submenu_length = all_submenu.length;

menu_btn.addEventListener("click", function () {
	menuvar += 1; if (window.matchMedia("(orientation: portrait)").matches) { menu_orientation = "block"; }
	else { menu_orientation = "inline"; };
	switch (menuvar) {
		case 1:

			for (let i = 0; i < all_submenu_length; i++) {
				all_submenu[i].style.display = menu_orientation;
			};

			break; case 2: menuvar = 0;

			for (let i = 0; i < all_submenu_length; i++) {
				all_submenu[i].style.display = "none";
			};
	}
});



const uni_901 = 901;
const uni_kp = 201;
let uni_1 = 1;
let uni_60000 = 60000;

function dawnoftime() {



	function update_sizes() {
		document.getElementById("div_wmm2020").style.height = document.getElementById("div_wmm2020").clientWidth + "px";
	};

	window.onresize = update_sizes();
	setTimeout(update_sizes, 100);


	function threednow_wmm2020() {
		let kontainer_wmm2020 = document.getElementById("div_wmm2020");

		let scene_wmm2020 = new THREE.Scene();


		let map_wmm2020 = kontainer_wmm2020.getBoundingClientRect();

		let camera_wmm2020 = new THREE.PerspectiveCamera(28, map_wmm2020.width / map_wmm2020.height, 0.001, 1000);
		camera_wmm2020.position.z = 3;

		let renderer_wmm2020 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer_wmm2020.setSize(map_wmm2020.width, map_wmm2020.height);
		renderer_wmm2020.setClearColor(0x000000, 0);
		kontainer_wmm2020.append(renderer_wmm2020.domElement);

		kendali_wmm2020 = new THREE.OrbitControls(camera_wmm2020, renderer_wmm2020.domElement);
		kendali_wmm2020.dampingfactor = 0.1;
		kendali_wmm2020.rotateSpeed = 0.5;

		let loader_wmm2020 = new THREE.TextureLoader().load("images/wmm2020.JPG");
		let material_wmm2020 = new THREE.MeshBasicMaterial({ map: loader_wmm2020 });

		let geometry_wmm2020 = new THREE.SphereGeometry(0.5, 64, 32);
		let cube_wmm2020 = new THREE.Mesh(geometry_wmm2020, material_wmm2020);
		scene_wmm2020.add(cube_wmm2020);
		cube_wmm2020.position.z = 0;
		cube_wmm2020.rotation.x = 0;
		cube_wmm2020.rotation.y = 0;
		renderer_wmm2020.render(scene_wmm2020, camera_wmm2020);

		function animate_wmm2020() {
			cube_wmm2020.rotation.y += 0.002;

			if (cube_wmm2020.rotation.y > 100000000) { cube_wmm2020.rotation.y = 0; };

			renderer_wmm2020.render(scene_wmm2020, camera_wmm2020);
			requestAnimationFrame(animate_wmm2020);
		}
		animate_wmm2020();
	};
	setTimeout(threednow_wmm2020, 200);




	for (let ia = 1; ia < uni_901; ia++) {



		const swt_gr = document.getElementById("swt_row");
		const mk_swt_gr = document.createElement("div");
		mk_swt_gr.classList.add("column9b");
		const mk_tooltip_swt = document.createElement("div");
		mk_tooltip_swt.classList.add("tooltip_swt");
		mk_swt_gr.append(mk_tooltip_swt);
		swt_gr.insertBefore(mk_swt_gr, swt_gr.childNodes[2]);

		const sws_gr = document.getElementById("sws_row");
		const mk_sws_gr = document.createElement("div");
		mk_sws_gr.classList.add("column9a");
		const mk_tooltip_sws = document.createElement("div");
		mk_tooltip_sws.classList.add("tooltip_sws");
		mk_sws_gr.append(mk_tooltip_sws);
		sws_gr.insertBefore(mk_sws_gr, sws_gr.childNodes[2]);

		const swd_gr = document.getElementById("swd_row");
		const mk_swd_gr = document.createElement("div");
		mk_swd_gr.classList.add("column9");
		const mk_tooltip_swd = document.createElement("div");
		mk_tooltip_swd.classList.add("tooltip_swd");
		mk_swd_gr.append(mk_tooltip_swd);
		swd_gr.insertBefore(mk_swd_gr, swd_gr.childNodes[2]);


		const swbt_gr = document.getElementById("swbt_row");

		const mk_btzs = document.createElement("div");
		mk_btzs.classList.add("btzsm");
		const mk_btzn = document.createElement("div");
		mk_btzn.classList.add("btznm");

		const mk_main_col = document.createElement("div");
		mk_main_col.classList.add("main_col1");
		mk_main_col.append(mk_btzs, mk_btzn);

		const mk_swbt_gr = document.createElement("div");
		mk_swbt_gr.classList.add("column9c");
		const mk_tooltip_swbt = document.createElement("div");
		mk_tooltip_swbt.classList.add("tooltip_swbt");
		mk_swbt_gr.append(mk_tooltip_swbt);
		mk_swbt_gr.appendChild(mk_main_col);


		swbt_gr.insertBefore(mk_swbt_gr, swbt_gr.childNodes[2]);
	}

	for (let i = 1; i < uni_kp; i++) {
		const kpi_gr = document.getElementById("kp_index_container")
		const mk_kpi_gr = document.createElement("div");
		mk_kpi_gr.classList.add("column8d");
		kpi_gr.insertBefore(mk_kpi_gr, kpi_gr.childNodes[2]);
	}


	let sli_swl = document.getElementById("sli_swinterval");
	let pp_swl = document.getElementById("pp_swinterval");

	pp_swl.innerHTML = "Solar Wind Data Interval: " + sli_swl.value + " Minute";

	sli_swl.oninput = function () {
		uni_1 = parseInt(sli_swl.value);

		if (uni_1 == 1) { pp_swl.innerHTML = "Solar Wind Data Interval: " + uni_1 + " Minute"; }
		else { pp_swl.innerHTML = "Solar Wind Data Interval: " + uni_1 + " Minutes"; }
	};




	const a_h2_sun = document.getElementById("h2_sun");
	const a_img_sun = document.getElementById("img_sun");
	const a_p_sun = document.getElementById("p_sun");


	const a_h2_interp = document.getElementById("h2_interp");
	const a_img_interp = document.getElementById("img_interp");
	const a_p_interp = document.getElementById("p_interp");


	const a_h2_earth = document.getElementById("h2_earth");
	const a_img_earth = document.getElementById("img_earth");
	const a_p_earth = document.getElementById("p_earth");

	let x_sun = 0; let x_interp = 0; let x_earth = 0;

	a_img_sun.addEventListener("click", slide_sun);
	a_img_interp.addEventListener("click", slide_interp);
	a_img_earth.addEventListener("click", slide_earth);

	a_p_sun.addEventListener("click", slide_sun);
	a_p_interp.addEventListener("click", slide_interp);
	a_p_earth.addEventListener("click", slide_earth);

	function slide_sun() {
		x_sun += 1;
		switch (x_sun) {
			case 1: a_h2_sun.innerHTML = "Solar Cycle";
				a_img_sun.src = "images/solar_cycle.jpg";
				a_p_sun.innerHTML = "Matahari memiliki siklus yang berlangsung setiap sebelas tahun. Siklus ini diawali dan diakhiri dengan minimum matahari, yang berarti aktivitas matahari sangat minimal atau bahkan tidak ada aktivitas. Diantara awal dan akhir siklus matahari 11 tahun ini, terjadi masa maksimum matahari, yang berarti aktivitas matahari sangat tinggi. ";

				break; case 2: a_h2_sun.innerHTML = "Solar Magnetic Field";
				a_img_sun.src = "images/solar_magnetic_cycle.jpg";
				a_p_sun.innerHTML = "Siklus matahari dikendalikan oleh arah dan kekuatan medan magnet matahari. Saat minimum matahari, medan magnet matahari arahnya teratur dan potensi kekuatannya menyebar keluar dari kutub utara dan selatan matahari. Hal tersebut berarti kekuatan magnet matahari sebagian besar tidak terletak pada matahari itu sendiri, yang mengakibatkan rendahnya aktivitas matahari pada minimum matahari. Berbeda dengan saat maksimum matahari, dimana medan magnet matahari terbawa rotasi diferential matahari yang menyebabkan bercampurnya medan magnet kutub utara dan selatan di sekitar khatulistiwa matahari. Hal ini menyebabkan arus konveksi listrik menjadi kacau dan seperti arus pendek di sekitar khatulistiwa, yang berarti sebagian besar potensi magnetik matahari terletak pada matahari itu sendiri, tepatnya di khatulistiwa matahari, sehingga terbentuklah sejumlah dampak yang secara kolektif disebut aktivitas matahari, termasuk titik matahari di permukaan matahari, semburan matahari, dan variasi angin matahari yang mengangkut material melintasi tata surya. Dampak aktivitas matahari terhadap Bumi meliputi aurora di lintang tengah sampai tinggi serta gangguan komunikasi radio dan tenaga listrik. Aktivitas matahari diduga memainkan peran besar dalam pembentukan dan evolusi tata surya. Aktivitas matahari juga mengubah struktur atmosfer terluar Bumi.";

				break; case 3: a_h2_sun.innerHTML = "Solar Cycle Progression";
				a_img_sun.src = "images/solarcycle25concesusprediction.jpg";
				a_p_sun.innerHTML = "Pada gambar terlihat riwayat siklus matahari selama 20 tahun terakhir. Dapat dilihat bahwa siklus ke-24 berakhir pada tahun 2020, dan pada tahun 2021 ini kita memasuki siklus ke-25.";

				break; case 4: a_h2_sun.innerHTML = "The Sun";
				a_img_sun.src = "https://services.swpc.noaa.gov/images/suvi-primary-195.png" + "?" + new Date().getTime();
				a_p_sun.innerHTML = "Matahari atau Surya adalah bintang di pusat tata surya. Bentuknya nyaris bulat dan terdiri dari plasma panas bercampur medan magnet. Diameternya sekitar 1.392.684 km, kira-kira 109 kali diameter Bumi, dan massanya (sekitar 2×1030 kilogram, 330.000 kali massa Bumi) mewakili kurang lebih 99,86 % massa total tata surya. Secara kimiawi, sekitar tiga perempat massa matahari terdiri dari hidrogen, sedangkan sisanya didominasi helium. Sisa massa tersebut (1,69%, setara dengan 5.629 kali massa Bumi) terdiri dari elemen-elemen berat seperti oksigen, karbon, neon, dan besi. Matahari terbentuk sekitar 4,6 miliar tahun yang lalu akibat peluruhan gravitasi suatu wilayah di dalam sebuah awan molekul besar. Sebagian besar materi berkumpul di tengah, sementara sisanya memipih menjadi cakram beredar yang kelak menjadi tata surya. Massa pusatnya semakin panas dan padat dan akhirnya memulai fusi termonuklir di intinya. Diduga bahwa hampir semua bintang lain terbentuk dengan proses serupa. Klasifikasi bintang matahari, berdasarkan kelas spektrumnya, adalah bintang deret utama G dan sering digolongkan sebagai katai kuning karena radiasi tampaknya lebih intens dalam porsi spektrum kuning-merah. Meski warnanya putih, dari permukaan Bumi, matahari tampak kuning dikarenakan pembauran cahaya biru di atmosfer. Menurut label kelas spektrum, G2 menandakan suhu permukaannya sekitar 5778 K (5505 °C) dan V menandakan bahwa matahari, layaknya bintang-bintang lain, merupakan bintang deret utama, sehingga energinya diciptakan oleh fusi nuklir nukleus hidrogen ke dalam helium. Dalam intinya, matahari memfusi 620 juta ton metrik hidrogen setiap detik."; x_sun = 0;
		}
	};

	function slide_interp() {
		x_interp += 1;
		switch (x_interp) {
			case 1: a_h2_interp.innerHTML = "Heliospheric Current Sheet";
				a_img_interp.src = "images/heliospheric_current_sheet1.jpg";
				a_p_interp.innerHTML = "Saat matahari berotasi, medan magnet antarplanetnya berbelit menjadi Spiral Archimedes. Perpanjangan spiral ini melalui tata surya membentuk Spiral Parker, yang dinamai setelah ilmuan Eugene Parker, yang memprediksi struktur spiral medan magnet antar planet. Pengaruh dari struktur spiral ini, menciptakan struktur terbesar di tata surya, yang disebut The Heliospheric Current Sheet, yang membagi spiral parker menjadi dua bagian polarisasi magnet utara dan selatan. Model matematis pertama dikembangkan pada tahun 1970 oleh Schatten, dengan hasil model tampak seperti rok ballerina. Bergelombangnya Current Sheet ini dikarenakan kemiringan sumbu dipole magnet matahari relatif terhadap sumbu rotasi matahari yang berotasi di sumbu yang berbeda. Tidak seperti medan magnet dari magnet biasa, medan magnet kutub utara dan selatan matahari terpuntir menjadi spiral aritmatis karena tekanan magnetohidrodinamis dari sumbu magnet dan sumbu rotasi yang berbeda. Medan magnet ini disebut medan poloidal matahari. Angin surya yang keluar dari kutub utara dan selatan matahari berubah menjadi hembusan jet yang terikat pada medan magnet poloidal, sehingga angin surya pada bagian utara dan selatan matahari juga membentuk struktur spiral aritmatis. Sekitar 10-20 jarak astronomis dari matahari, struktur current sheet menumpuk menjadi bentuk toroidal yang tebal.";


				break; case 2: a_h2_interp.innerHTML = "Ecliptic Plane";
				a_img_interp.src = "images/heliospheric_current_sheet2.png";
				a_p_interp.innerHTML = "Jika melihat struktur tadi dari atas, maka akan terlihat seperti gambar di samping kiri. Gambar tersebut menunjukkan polaritas Current Sheet yang terletak pada bidang orbit Bumi.";

				break; case 3: a_h2_interp.innerHTML = "Interplanetary";
				a_img_interp.src = "images/heliospheric_current_sheet.jpg";
				a_p_interp.innerHTML = "Ruang angkasa di antara planet tidak hanya diam saja. Disana, terdapat angin surya yang selalu berhembus dari matahari. Angin surya adalah aliran partikel bermuatan seperti proton, elektron, dan partikel alpha dengan energi kinetik berkisaran 0.5-10KeV. Komposisi angin surya juga mengandung unsur yang terdapat di plasma matahari seperti: C, N, O, Ne, Mg, Si, S, dan Fe. Dan isotop P, Ti, Cr, Ni, Fe 54 dan 56. Angin surya mempunyai kepadatan, kecepatan, suhu, sudut, dan arah potensi magnet yang berubah-ubah. Angin surya juga merupakan media lewatnya medan magnet antar-planet atau Interplanetary Magnetic Field."; x_interp = 0;
		}
	};

	function slide_earth() {
		x_earth += 1;
		switch (x_earth) {
			case 1: a_h2_earth.innerHTML = "Geodynamo";
				a_img_earth.src = "images/SnappyOffbeatGraywolf.gif";
				a_p_earth.innerHTML = "Rekaman paleomagnetik menunjukan bahwa medan geomagnetik telah ada sekitar 3 millar tahun. Namun, berdasarkan ukuran dan daya hantar inti Bumi, menunjukkan medan magnet akan hilang dalam waktu 20.000 tahun jika bersumber dari material magnet permanen. Rekaman paleomagnetik juga menunjukkan medan geomagnetik sering membalik polartias, dengan siklus rata-rata sekitar 200.000 tahun, dengan pembalikan individual membutuhkan waktu ribuan tahun. Pengamatan ini menunjukan adanya mekanisme dalam Bumi yang terus-menerus menghasilkan medan geomagnetik. Telah lama dispekulasikan bahwa mekanisme ini adalah konveksi logam cair di inti luar Bumi yang dinamakan Geodynamo. Inti dalam Bumi berukuran hampir sama dengan ukuran bulan, dan terbuat dari unsur berat seperti besi, nikel, emas, dan uranium. Sebagian besar uranium yang berat jatuh ke dalam inti ini dan menghasilkan panas melalui pembusukan radioaktif. Panas ini lalu merambat keluar dari dalam inti, dan akhirnya mencapai inti luar yang berwujud cair. Panas ini menciptakan gradien suhu pada lapisan inti luar. Dipercaya gradien suhu inilah yang membangkitkan konveksi dinamo pembentuk medan geomagnetik.";

				break; case 2: a_h2_earth.innerHTML = "Geomagnetism";
				a_img_earth.src = "images/South_Atlantic_Anomaly_pillars.png";
				a_p_earth.innerHTML = "Arah medan magnet bumi terbalik dari arah kutub geografis, yang berarti kutub utara geografis memiliki kutub magnet selatan, dan sebaliknya. Sebenarnya, Bumi memiliki 2 kutub magnet selatan di Kanada dan Russia dan 1 kutub magnet Utara di daerah lau selatan Australia. Tak hanya itu, medan magnet Bumi juga bervariasi antara 25 hingga 65 mikrotesla. Hal ini adalah alami, dan dikarenakan dari sifat konveksi dinamo yang memang terbilang kacau. Konveksi yang kacau ini mengakibatkan variasi intensitas medan magnet yang berbeda dari satu lokasi di permukaan bumi ke lokasi yang lain. Misal, pada gambar terlihat area biru yang disebut anomali Atlantik Selatan, dimana intensitas magnet menurun hingga 25 mikrotesla. Hal ini dapat diakibatkan oleh salah satu konveksi koreolis dinamo yang terbalik. Sementara, di area lain terutama di kutub magnet Utara, mempunyai intensitas magnet yang tinggi hingga 65 mikrotesla";

				break; case 3: a_h2_earth.innerHTML = "Space Weather Interface";
				a_img_earth.src = "images/electromagnetic-revolution.jpg";
				a_p_earth.innerHTML = "Dapat dilihat terapat kerumitan yang tinggi sehingga saya belum bisa menjelaskan. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."

				break; case 4: a_h2_earth.innerHTML = "Earth";
				a_img_earth.src = "images/earth_magnetosphere.jpg";
				a_p_earth.innerHTML = "Medan magnet Bumi, disebut juga medan geomagnetik, adalah medan magnet yang menjangkau dari bagian dalam Bumi hingga ke batas di mana medan magnet bertemu radiasi matahari (magnetosfer). Besarnya medan magnet Bumi bervariasi antara 25 hingga 65 mikrotesla (0.25 hingga 0.65 gauss). Kutub-kutub medan magnet Bumi diperkirakan miring sepuluh derajat terhadap aksis Bumi, dan terus bergerak sepanjang waktu akibat pergerakan besi paduan cair di dalam inti luar Bumi. Kutub magnet Bumi bergerak begitu lambat sehingga kompas masih dapat berfungsi dengan baik sejak digunakan pertama kali (abad ke 11 masehi). Namun setiap beberapa ratus ribu tahun sekali, kutub magnet Bumi berbalik antara utara dan selatan. Pembalikan ini terekam di dalam pola bebatuan purbakala Bumi yang mengandung unsur yang bersifat ferromagnetik. Pergerakan lempeng benua juga dipengaruhi oleh medan magnet. Medan magnet Bumi memantulkan sebagian besar angin matahari, yaitu arus partikel bermuatan dari matahari yang mampu mengionisasi lapisan atmosfer Bumi. Gas-gas yang terkena angin matahari secara langsung dapat terbawa arus angin matahari, sebuah proses yang mungkin pernah terjadi di planet Mars. Studi mengenai medan magnet Bumi pada masa lalu disebut dengan Paleomagnetisme. Polaritas dari medan magnet Bumi terekam dalam bebatuan, dan pembalikan medan magnet Bumi terkema di dalam garis-garis yang terbentuk ketika pembentukan bebatuan terjadi. Paleomagnetisme juga dapat menjadi sarana perekaman geokronologi batuan dan sedimen. Medan mangetik Bumi juga menyebabkan bebatuan yang mengandung bijih tambang dari unsur ferromagnetik lebih mudah dicari karena menyebabkan anomali magnetik Bumi. Manusia telah menggunakan kompas yang bergantung pada medan magnet Bumi untuk menentukan arah, sejak abad ke 11 masehi. Hewan juga diketahui memanfaatkan medan magnet Bumi sebagai sarana untuk bermigrasi. Variasi medan magnet Bumi diketahui berhubungan dengan variasi curah hujan di negara tropis."; x_earth = 0;
		};
	}
};


function OmegaOverlord() {

	async function fetch_master(luink) {
		let x = await fetch(luink);
		let y = await x.text();
		let z = await JSON.parse(y);
		return z;
	};

	const container_log = document.getElementById("log_container1");
	const button_rm_t = document.getElementById("rm_log_t");
	const button_rm_outdated = document.getElementById("rm_log_outdated");
	const button_rm_f = document.getElementById("rm_log_f");
	const button_rm_t_all = document.getElementById("rm_log_t_all");
	const button_rm_outdated_all = document.getElementById("rm_log_outdated_all");
	const button_rm_f_all = document.getElementById("rm_log_f_all");


	function logmaker(date, context, state) {
		let date1 = date.toString();
		let date2 = date1.replace("(Western Indonesia Time)", " ");
		let date3 = date2.replace("GMT+0700", "");
		const new_log = document.createElement("li");
		if (state == 69) { new_log.innerText = "@ " + date3 + "- " + context + " has Loaded!"; new_log.setAttribute("class", "log_pro"); }
		else if (state == 0) { new_log.innerText = "@ " + date3 + "- " + context + " Failed to load!"; new_log.setAttribute("class", "log_noop"); }
		else if (state == 1) { new_log.innerText = "@ " + date3 + "- " + context + " have Outdated Data!"; new_log.setAttribute("class", "log_noob"); }
		container_log.appendChild(new_log);
	};

	button_rm_t.addEventListener("click", function () {
		let all_logs_t = document.querySelectorAll(".log_pro");
		all_logs_t[0].remove();
	});

	button_rm_outdated.addEventListener("click", function () {
		let all_logs_outdated = document.querySelectorAll(".log_noob");
		all_logs_outdated[0].remove();
	});

	button_rm_f.addEventListener("click", function () {
		let all_logs_f = document.querySelectorAll(".log_noop");
		all_logs_f[0].remove();
	});


	function rm_t_all_disc() {
		let all_logs_t = document.querySelectorAll(".log_pro");
		let logs_length = all_logs_t.length;

		for (let i = 0; i < logs_length; i++) {
			let all_logs_t = document.querySelectorAll(".log_pro");
			all_logs_t[0].remove()
		}
	}

	function rm_outdated_all_disc() {
		let all_logs_outdated = document.querySelectorAll(".log_noob");
		let logs_length = all_logs_outdated.length;

		for (let i = 0; i < logs_length; i++) {
			let all_logs_outdated = document.querySelectorAll(".log_noob");
			all_logs_outdated[0].remove()
		}
	}

	function rm_f_all_disc() {
		let all_logs_f = document.querySelectorAll(".log_noop");
		let logs_length = all_logs_f.length;

		for (let i = 0; i < logs_length; i++) {
			let all_logs_f = document.querySelectorAll(".log_noop");
			all_logs_f[0].remove()
		}
	}


	button_rm_t_all.addEventListener("click", function () { rm_t_all_disc(); });
	button_rm_outdated_all.addEventListener("click", function () { rm_outdated_all_disc(); });
	button_rm_f_all.addEventListener("click", function () { rm_f_all_disc(); });


	let the_vaccine = document.getElementById("h2_vac");

	let json_vac = [];
	let vac_length = 0;
	let vaccine_ready = false;


	function load_vac() {
		function loader_vac() {
			try {
				if (json_vac != [] && window.navigator.onLine && json_vac.message === "success" && vaccine_ready == true) { vac_length = json_vac.data.length; renew_prov(); logmaker(new Date(), "Vaccine", 69); }

				else { logmaker(new Date(), "Vaccine", 0); };
			}

			catch (err) { logmaker(new Date(), "Vaccine", 0); };
		};

		fetch_master("https://api.vaksinasi.id/regions").then(
			function (value) { json_vac = value; vaccine_ready = true; setTimeout(loader_vac, 100); },
			function (error) { json_vac = []; vaccine_ready = false; setTimeout(loader_vac, 100); }
		);

	};
	setTimeout(load_vac, 700);

	the_vaccine.addEventListener("click", function () { setTimeout(load_vac, 900) });

	const selection_vac_prov = document.getElementById("vac_prov");
	const selection_vac_town = document.getElementById("vac_town");
	const selection_vac_district = document.getElementById("vac_district");
	const district_date = document.getElementById("p_vac_date");
	const district_time = document.getElementById("p_vac_time");
	const district_reg = document.getElementById("p_vac_reg");
	const district_age = document.getElementById("p_vac_age");
	const district_link = document.getElementById("p_vac_link");
	const district_map = document.getElementById("p_vac_map");

	function renew_prov() {

		let all_vac_prov = document.querySelectorAll(".option_prov");
		let all_vac_prov_length = all_vac_prov.length;

		for (let i = 0; i < all_vac_prov_length; i++) {
			let all_vac_prov = document.querySelectorAll(".option_prov");
			all_vac_prov[0].remove();
		};

		for (let i = 0; i < vac_length; i++) {

			const new_prov = document.createElement("option");
			new_prov.innerText = (i + 1) + ". " + json_vac.data[i].province;
			new_prov.setAttribute("id", i);
			new_prov.setAttribute("class", "option_prov");
			selection_vac_prov.appendChild(new_prov);

		};
	}

	selection_vac_prov.oninput = function () {
		let pre_str_vac_prov = selection_vac_prov.value.slice(0, 3);
		let str_vac_prov = pre_str_vac_prov.replace(/[^0-9]/g, "");
		let int_vac_prov = parseInt(str_vac_prov) - 1;
		let str_vac_city = json_vac.data[int_vac_prov].city;
		let vac_city_length = str_vac_city.length;


		let all_vac_city = document.querySelectorAll(".option_town");
		let all_vac_city_length = all_vac_city.length;

		for (let i = 0; i < all_vac_city_length; i++) {
			let all_vac_city = document.querySelectorAll(".option_town");
			all_vac_city[0].remove();
		};


		for (let i = 0; i < vac_city_length; i++) {
			const new_town = document.createElement("option");
			new_town.innerText = (i + 1) + ". " + str_vac_city[i];
			new_town.setAttribute("id", i);
			new_town.setAttribute("class", "option_town");
			selection_vac_town.appendChild(new_town);
		};
		setTimeout(load_the_town, 20);
	};

	selection_vac_town.oninput = load_the_town;

	function load_the_town() {
		let districts_ready = false;

		let all_vac_district = document.querySelectorAll(".option_district");
		let all_vac_district_length = all_vac_district.length;

		for (let i = 0; i < all_vac_district_length; i++) {
			let all_vac_district = document.querySelectorAll(".option_district");
			all_vac_district[0].remove();
		};

		let str_vac_province = selection_vac_prov.value.replace(/[0-9]/g, "").substring(2).replaceAll(" ", "%20");
		let str_vac_town = selection_vac_town.value.replace(/[0-9]/g, "").substring(2).replaceAll(" ", "%20");
		let final_url = "https://api.vaksinasi.id/locations/" + str_vac_province + "?city=" + str_vac_town;
		var str_final_url = final_url.toString();
		let district_data = [];
		let district_length = 0;

		function load_district() {

			for (let i = 0; i < district_length; i++) {
				const new_district = document.createElement("option");
				new_district.innerText = (i + 1) + ". " + district_data.data[i].title;
				new_district.setAttribute("id", i);
				new_district.setAttribute("class", "option_district");
				selection_vac_district.appendChild(new_district);
			};



			selection_vac_district.oninput = load_the_district;
			function load_the_district() {
				let pre_str_vac_district = selection_vac_district.value.slice(0, 3);
				let str_vac_district = pre_str_vac_district.replace(/[^0-9]/g, "");
				let int_vac_district = parseInt(str_vac_district) - 1;

				district_date.innerHTML = "Date: " + check_data(district_data.data[int_vac_district].datestart) + " To " + check_data(district_data.data[int_vac_district].dateend);
				district_time.innerHTML = "Time: " + check_data(district_data.data[int_vac_district].timestart) + " To " + check_data(district_data.data[int_vac_district].timeend);
				district_reg.innerHTML = "Registration: " + check_data(district_data.data[int_vac_district].registration);
				district_age.innerText = "Age: ";

				let agerange_n = district_data.data[int_vac_district].agerange.length;

				let all_p_agerange = document.querySelectorAll(".pp_agerange");
				let all_p_agerange_length = all_p_agerange.length;
				for (let i = 0; i < all_p_agerange_length; i++) {
					let all_p_agerange = document.querySelectorAll(".pp_agerange");
					all_p_agerange[0].remove();

				};

				let all_vac_map = document.querySelectorAll(".a_vac_map");
				if (all_vac_map.length > 0) { all_vac_map[0].remove() };

				let all_vac_link = document.querySelectorAll(".a_vac_link");
				if (all_vac_link.length > 0) { all_vac_link[0].remove() };

				function load_vac_age() {
					for (let i = 0; i < agerange_n; i++) {
						const new_p_age = document.createElement("p");
						new_p_age.setAttribute("class", "pp_agerange");
						new_p_age.innerHTML = district_data.data[int_vac_district].agerange[i];
						district_age.appendChild(new_p_age);
					};

					const new_vac_map = document.createElement("a");
					new_vac_map.setAttribute("href", district_data.data[int_vac_district].map.toString());
					new_vac_map.innerText = check_data(district_data.data[int_vac_district].title);
					new_vac_map.setAttribute("class", "a_vac_map"); new_vac_map.setAttribute("target", "_blank");
					district_map.innerText = "Map: ";
					district_map.appendChild(new_vac_map);

					try {
						const new_vac_link = document.createElement("a");
						new_vac_link.setAttribute("href", district_data.data[int_vac_district].link.toString())
						new_vac_link.innerText = check_data(district_data.data[int_vac_district].title);
						new_vac_link.setAttribute("class", "a_vac_link"); new_vac_link.setAttribute("target", "_blank");
						district_link.innerText = "Link: ";
						district_link.appendChild(new_vac_link);
					}
					catch (err) { district_link.innerText = "Link Tidak Ditemukan" };

				};
				setTimeout(load_vac_age, 100);



			};

			setTimeout(load_the_district, 100);
		};

		function preload_district() {
			try {
				district_length = district_data.data.length;
				if (districts_ready == true && district_length > 0 && window.navigator.onLine) { load_district(); }

				else if (districts_ready == true && district_length < 1 && window.navigator.onLine) {
					district_date.innerHTML = "Tidak Ditemukan";
					district_time.innerHTML = "Tidak Ditemukan";
					district_reg.innerHTML = "Tidak Ditemukan";
					district_age.innerHTML = "Tidak Ditemukan";
					district_map.innerHTML = "Tidak Ditemukan";
					district_link.innerHTML = "Tidak Ditemukan";
				}

				else {
					district_date.innerHTML = "Koneksi Anda Noob";
					district_time.innerHTML = "Koneksi Anda Noob";
					district_reg.innerHTML = "Koneksi Anda Noob";
					district_age.innerHTML = "Koneksi Anda Noob";
					district_map.innerHTML = "Koneksi Anda Noob";
					district_link.innerHTML = "Koneksi Anda Noob";
				};
			}

			catch (err) {
				district_date.innerHTML = "Tidak Ditemukan";
				district_time.innerHTML = "Tidak Ditemukan";
				district_reg.innerHTML = "Tidak Ditemukan";
				district_age.innerHTML = "Tidak Ditemukan";
				district_map.innerHTML = "Tidak Ditemukan";
				district_link.innerHTML = "Tidak Ditemukan";
			};

		};


		fetch_master(str_final_url).then(
			function (value) { district_data = value; districts_ready = true; setTimeout(preload_district, 100); },
			function (error) { district_data = []; districts_ready = false; setTimeout(preload_district, 100); }
		);

	};






	let init_kp = []; c_kp = []; kpn_1 = 400; kpn_2 = 40;

	const x_column7 = document.querySelectorAll(".column7");
	const x_column7a = document.querySelectorAll(".column7a");
	const x_column7b = document.querySelectorAll(".column7b");
	const length_column7 = x_column7.length;
	const length_column7a = x_column7a.length;
	const length_column7b = x_column7b.length;

	const x_column8d = document.querySelectorAll(".column8d");
	const length_column8d = x_column8d.length;

	const x_kp_txt = document.getElementById("kp_txt");
	const x_kp_txtt = document.getElementById("kp_txtt");

	let MEGA_OP = null;
	let load_buffer_kp = null;



	function renew_kp() {

		function load_kp() {
			for (let ia = 1; ia < 7; ia++) {

				let textKP;
				let currentTime;

				if (ia <= 1) {
					textKP = c_kp[MEGA_OP - ia].estimated_kp.toString();
					currentTime = c_kp[MEGA_OP - ia].time_tag.toString();
				} else {
					textKP = c_kp[MEGA_OP - ((ia - 1) * 10)].estimated_kp.toString();
					currentTime = c_kp[MEGA_OP - ((ia-1) * 10)].time_tag.toString();
				};

				currentTime = currentTime.substr(0, 10) + "   " + currentTime.substr(11, 19);

				let subKP = textKP.substring(0, 4);
				let currentKP = parseFloat(subKP);
				let KPVar = currentKP * 10;

				x_column7[length_column7 - ia].style.marginTop = Math.round(kpn_1 - (kpn_2 * currentKP)) + "px";
				x_column7a[length_column7a - ia].innerHTML = "KP: " + subKP;
				x_column7b[length_column7b - ia].innerHTML = currentTime + " UTC";

				x_column7[length_column7 - ia].style.backgroundColor = "#00FFFF";
				x_column7[length_column7 - ia].style.webkitFilter = "hue-rotate(" + Math.round(KPVar)*3 +"deg)"; 
				
			};

			for (let ia = 1; ia < uni_kp; ia++) {

				let textKP6 = c_kp[MEGA_OP - ia].estimated_kp.toString();

				let subKP6 = textKP6.substring(0, 4);
				let currentKP6 = parseFloat(subKP6);
				let KPVar6 = currentKP6 * 10;

				x_column8d[length_column8d - ia].style.marginTop = Math.round(kpn_1 - (kpn_2 * currentKP6)) + "px";
				x_column8d[length_column8d - ia].style.backgroundColor = "#00FFFF";
				x_column8d[length_column8d - ia].style.webkitFilter = "hue-rotate(" + Math.round(KPVar6)*3 + "deg)"; 

			};
		};

		function loader_kp() {
			try {
				if (window.navigator.onLine && !isNaN(init_kp[0].kp_index) && load_buffer_kp === null) { c_kp = init_kp; MEGA_OP = c_kp.length; logmaker(new Date(), "KP Index", 69); load_kp(); load_buffer_kp = init_kp[init_kp.length - 1].k_index; }

				else if (window.navigator.onLine && !isNaN(init_kp[1].kp_index) && init_kp[init_kp.length - 1].kp_index !== load_buffer_kp) { c_kp = init_kp; MEGA_OP = c_kp.length; logmaker(new Date(), "KP Index", 69); load_kp(); load_buffer_kp = init_kp[init_kp.length - 1][0]; }

				else { logmaker(new Date(), "KP Index", 1); };
			}
			catch (err) { logmaker(new Date(), "KP Index", 0); };
		};

		fetch_master("https://services.swpc.noaa.gov/json/planetary_k_index_1m.json").then(
			function (value) { init_kp = value; setTimeout(loader_kp, 100); },
			function (error) { init_kp = []; setTimeout(loader_kp, 100); }
		);

	};

	let init_sw = []; c_sw = []; d_sw = false; swn_1 = null; swn_2 = 40; swn_3 = 50; swn_4 = null; swn_5 = null; width1 = 200; width2 = 100; swn_6 = null; swn_7 = null;
	let btz1 = null; btz2 = null; btz3 = null; btz4 = null; btz5 = null;
	let sws_1 = null; sws_2 = 40; sws_3 = 0.7; sws_4 = null; sws_5 = null; sws_6 = null; sws_7 = null;
	let swt_1 = null; swt_2 = 40; swt_3 = 0.001; swt_4 = null; swt_5 = null; swt_6 = null; swt_7 = null;
	let swbt_1 = null; swbt_2 = 40; swbt_3 = 50; swbt_4 = null; swbt_5 = null; swbt_6 = null; swbt_7 = null;

	const x_btbzd = document.getElementById("btbzd");
	const x_btzn = document.getElementById("btzn");
	const x_btzs = document.getElementById("btzs");
	const x_btzntx = document.getElementById("btzntx");
	const x_btzstx = document.getElementById("btzstx");
	const x_btznt = document.getElementById("btznt");
	const x_btzst = document.getElementById("btzst");

	const x_swbtg5 = document.getElementById("swbtg5");
	const x_swbtg4 = document.getElementById("swbtg4");
	const x_swbtg3 = document.getElementById("swbtg3");
	const x_swbtg2 = document.getElementById("swbtg2");
	const x_swbtg1 = document.getElementById("swbtg1");

	const x_column9c = document.querySelectorAll(".column9c");
	const all_tooltip_swbt = document.querySelectorAll(".tooltip_swbt");
	const length_tooltip_swbt = all_tooltip_swbt.length;
	const x_swbt_txt = document.getElementById("swbt_txt");
	const x_swbt_txtt = document.getElementById("swbt_txtt");
	const length_col9c = x_column9c.length;

	const x_btznm = document.querySelectorAll(".btznm");
	const x_btzsm = document.querySelectorAll(".btzsm");
	const length_btznm = x_btznm.length;
	const length_btzsm = x_btzsm.length;

	const x_swdg5 = document.getElementById("swdg5");
	const x_swdg4 = document.getElementById("swdg4");
	const x_swdg3 = document.getElementById("swdg3");
	const x_swdg2 = document.getElementById("swdg2");
	const x_swdg1 = document.getElementById("swdg1");

	const x_column9 = document.querySelectorAll(".column9");
	const all_tooltip_swd = document.querySelectorAll(".tooltip_swd");
	const length_tooltip_swd = all_tooltip_swd.length;
	const x_swd_txt = document.getElementById("swd_txt");
	const x_swd_txtt = document.getElementById("swd_txtt");
	const length_col9 = x_column9.length;

	const x_swsg5 = document.getElementById("swsg5");
	const x_swsg4 = document.getElementById("swsg4");
	const x_swsg3 = document.getElementById("swsg3");
	const x_swsg2 = document.getElementById("swsg2");
	const x_swsg1 = document.getElementById("swsg1");

	const x_column9a = document.querySelectorAll(".column9a");
	const all_tooltip_sws = document.querySelectorAll(".tooltip_sws");
	const length_tooltip_sws = all_tooltip_sws.length;
	const x_sws_txt = document.getElementById("sws_txt");
	const x_sws_txtt = document.getElementById("sws_txtt");
	const length_col9a = x_column9a.length;

	const x_swtg5 = document.getElementById("swtg5");
	const x_swtg4 = document.getElementById("swtg4");
	const x_swtg3 = document.getElementById("swtg3");
	const x_swtg2 = document.getElementById("swtg2");
	const x_swtg1 = document.getElementById("swtg1");

	const x_column9b = document.querySelectorAll(".column9b");
	const all_tooltip_swt = document.querySelectorAll(".tooltip_swt");
	const length_tooltip_swt = all_tooltip_swt.length;
	const x_swt_txt = document.getElementById("swt_txt");
	const x_swt_txtt = document.getElementById("swt_txtt");
	const length_col9b = x_column9b.length;

	const h2_logs_js = document.getElementById("h2_logs");

	let OMEGA_OP = null;
	let load_buffer_sw = null;

	let n_swtime = 0;
	let n_swtime1 = 60;
	let n_logcycle = 26;
	let n_logcycles = n_logcycle;

	function renew_sw() {
		
		n_logcycles -= 1;

		h2_logs_js.innerHTML = "Hard Wood (Logs) {" + n_logcycles + "}";

		n_swtime = 0;
		function load_sw() {
			function dlay_swbtz() {

				btz1 = parseFloat(c_sw[OMEGA_OP - 1][7]);
				btz2 = parseFloat(c_sw[OMEGA_OP - 1][6]);

				btz3 = btz1 + btz1;

				btz4 = (width2 / btz3) * (btz1 + btz2);
				btz5 = (width2 / btz3) * (btz1 - btz2);

				x_btbzd.style.height = parseInt(btz1 * 13) + "px";
				x_btzn.style.width = Math.round(btz4) + "%";
				x_btzs.style.width = Math.round(btz5) + "%";
				x_btzntx.innerHTML = check_data(Math.round(btz4)) + "% N";
				x_btzstx.innerHTML = check_data(Math.round(btz5)) + "% S";
				x_btznt.innerHTML = "BT: " + check_data(btz1);
				x_btzst.innerHTML = "Bz: " + check_data(btz2);
			};



			function dlay_swbt() {
				let four_swbt = [];
				for (let ia = 1; ia < uni_901; ia++) { four_swbt.push(c_sw[OMEGA_OP - (ia * uni_1)][7]) };

				swbt_4 = Math.max(...four_swbt);
				swbt_5 = Math.min(...four_swbt);
				swbt_6 = swbt_4 - swbt_5;

				x_swbtg5.innerHTML = check_data((swbt_4 - (swbt_6 / 10)).toFixed(2));
				x_swbtg4.innerHTML = check_data((swbt_4 - (swbt_6 / 4)).toFixed(2));
				x_swbtg3.innerHTML = check_data((swbt_4 - (swbt_6 / 2)).toFixed(2));
				x_swbtg2.innerHTML = check_data((swbt_4 - (swbt_6 / 1.4)).toFixed(2));
				x_swbtg1.innerHTML = check_data((swbt_5 + (swbt_6 / 16)).toFixed(2));

				for (let ia = 1; ia < uni_901; ia++) {
					x_column9c[length_col9c - ia].style.marginTop = width1 - (width1 * ((parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7])) - swbt_5) / swbt_6) + "px";


					x_btznm[length_btznm - ia].style.height = Math.round((width2 / (parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) + parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7])))
						* (parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) + parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][6]))) + "%";
					x_btzsm[length_btzsm - ia].style.height = Math.round((width2 / (parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) + parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7])))
						* (parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) - parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][6]))) + "%";

					all_tooltip_swbt[length_tooltip_swbt - ia].innerHTML = c_sw[OMEGA_OP - (ia * uni_1)][7] + " Bt, " + c_sw[OMEGA_OP - (ia * uni_1)][6] + " Bz" + "<br>" +
						c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "").substr(10, 16) + " UTC";
				}
			};


			function dlay_swd() {
				let four_swd = [];
				for (let ia = 1; ia < uni_901; ia++) { four_swd.push(c_sw[OMEGA_OP - (ia * uni_1)][2]) };

				swn_4 = Math.max(...four_swd);
				swn_5 = Math.min(...four_swd);
				swn_6 = swn_4 - swn_5;

				x_swdg5.innerHTML = check_data((swn_4 - (swn_6 / 10)).toFixed(2));
				x_swdg4.innerHTML = check_data((swn_4 - (swn_6 / 4)).toFixed(2));
				x_swdg3.innerHTML = check_data((swn_4 - (swn_6 / 2)).toFixed(2));
				x_swdg2.innerHTML = check_data((swn_4 - (swn_6 / 1.4)).toFixed(2));
				x_swdg1.innerHTML = check_data((swn_5 + (swn_6 / 16)).toFixed(2));

				for (let ia = 1; ia < uni_901; ia++) {
					x_column9[length_col9 - ia].style.marginTop = width1 - (width1 * ((parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][2])) - swn_5) / swn_6) + "px";
					all_tooltip_swd[length_tooltip_swd - ia].innerHTML = c_sw[OMEGA_OP - (ia * uni_1)][2] + " P/cm<sup>3</sup>" + "<br>" +
						c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "").substr(10, 16) + " UTC";
				}
			};



			function dlay_sws() {
				let four_sws = [];
				for (let ia = 1; ia < uni_901; ia++) { four_sws.push(c_sw[OMEGA_OP - (ia * uni_1)][1]) };

				sws_4 = Math.max(...four_sws);
				sws_5 = Math.min(...four_sws);
				sws_6 = sws_4 - sws_5;

				x_swsg5.innerHTML = check_data((sws_4 - (sws_6 / 10)).toFixed(2));
				x_swsg4.innerHTML = check_data((sws_4 - (sws_6 / 4)).toFixed(2));
				x_swsg3.innerHTML = check_data((sws_4 - (sws_6 / 2)).toFixed(2));
				x_swsg2.innerHTML = check_data((sws_4 - (sws_6 / 1.4)).toFixed(2));
				x_swsg1.innerHTML = check_data((sws_5 + (sws_6 / 16)).toFixed(2));

				for (let ia = 1; ia < uni_901; ia++) {
					x_column9a[length_col9a - ia].style.marginTop = width1 - (width1 * ((parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][1])) - sws_5) / sws_6) + "px";
					all_tooltip_sws[length_tooltip_sws - ia].innerHTML = c_sw[OMEGA_OP - (ia * uni_1)][1] + " KM/s" + "<br>" +
						c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "").substr(10, 16) + " UTC";
				}
			};



			function dlay_swt() {

				let four_swt = [];
				for (let ia = 1; ia < uni_901; ia++) { four_swt.push(c_sw[OMEGA_OP - (ia * uni_1)][3]) };

				swt_4 = Math.max(...four_swt);
				swt_5 = Math.min(...four_swt);
				swt_6 = swt_4 - swt_5;

				x_swtg5.innerHTML = check_data(Math.round(swt_4 - (swt_6 / 10)));
				x_swtg4.innerHTML = check_data(Math.round(swt_4 - (swt_6 / 4)));
				x_swtg3.innerHTML = check_data(Math.round(swt_4 - (swt_6 / 2)));
				x_swtg2.innerHTML = check_data(Math.round(swt_4 - (swt_6 / 1.4)));
				x_swtg1.innerHTML = check_data(Math.round(swt_5 + (swt_6 / 16)));


				for (let ia = 1; ia < uni_901; ia++) {
					x_column9b[length_col9b - ia].style.marginTop = width1 - (width1 * ((parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][3])) - swt_5) / swt_6) + "px";
					all_tooltip_swt[length_tooltip_swt - ia].innerHTML = c_sw[OMEGA_OP - (ia * uni_1)][3] + " K" + "<br>" +
						c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "").substr(10, 16) + " UTC";
				}
			};

			const wendar_swbtz = setTimeout(dlay_swbtz, 200);
			const wendar_swbt = setTimeout(dlay_swbt, 400);
			const wendar_swd = setTimeout(dlay_swd, 600);
			const wendar_sws = setTimeout(dlay_sws, 800);
			const wendar_swt = setTimeout(dlay_swt, 1000);
		}

		function loader_sw() {
			try {
				if (window.navigator.onLine && !isNaN(init_sw[1][1]) && load_buffer_sw === null) { c_sw = init_sw; OMEGA_OP = c_sw.length; load_sw(); logmaker(new Date(), "Solar Wind", 69); load_buffer_sw = init_sw[init_sw.length - 1][0]; }

				else if (window.navigator.onLine && !isNaN(init_sw[1][1]) && init_sw[init_sw.length - 1][0] !== load_buffer_sw) { c_sw = init_sw; OMEGA_OP = c_sw.length; load_sw(); logmaker(new Date(), "Solar Wind", 69); load_buffer_sw = init_sw[init_sw.length - 1][0]; }

				else { logmaker(new Date(), "Solar Wind", 1); };
			}
			catch (err) { logmaker(new Date(), "Solar Wind", 0); };
		};

		fetch_master("https://services.swpc.noaa.gov/products/geospace/propagated-solar-wind.json").then(
			function (value) { init_sw = value; setTimeout(loader_sw, 100); },
			function (error) { init_sw = []; setTimeout(loader_sw, 100); }
		);


		function loghandler() {
			if (n_logcycles < 1) {
				n_logcycles = n_logcycle;
				rm_f_all_disc();
				rm_t_all_disc();
				rm_outdated_all_disc();
				h2_logs_js.innerHTML = "Hard Wood (Logs) {" + n_logcycles + "}";
			};
		};

		setTimeout(loghandler, 3000);

	};

	const the_kp = document.getElementById("h2_kp");
	const the_swbt = document.getElementById("h2_swbt");
	the_kp.addEventListener("click", function () { setTimeout(renew_kp, 900) });
	the_swbt.addEventListener("click", function () { setTimeout(renew_sw, 900) });

	function wendarpog1() {
		for (let ia = 1; ia < uni_901; ia++) {
			x_column9b[length_col9b - ia].addEventListener("mouseover", function () {
				x_swt_txt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][3]) + " K";
				x_swt_txtt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "")) + " UTC";
			});

			x_column9a[length_col9a - ia].addEventListener("mouseover", function () {
				x_sws_txt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][1]) + " KM/s";
				x_sws_txtt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "")) + " UTC";
			});

			x_column9[length_col9 - ia].addEventListener("mouseover", function () {
				x_swd_txt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][2]) + " P/cm<sup>3</sup>";
				x_swd_txtt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "")) + " UTC";
			});

			x_column9c[length_col9c - ia].addEventListener("mouseover", function () {
				x_swbt_txt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][7]) + " B, " +
					check_data(Math.round((100 / (parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) + parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]))) *
						(parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) + parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][6])))) + "% N, " +
					check_data(Math.round((100 / (parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) + parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]))) *
						(parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][7]) - parseFloat(c_sw[OMEGA_OP - (ia * uni_1)][6])))) + "% S.";

				x_swbt_txtt.innerHTML = check_data(c_sw[OMEGA_OP - (ia * uni_1)][0].replace(":00.000", "")) + " UTC";
			});


		};

		

		for (let ia = 1; ia < uni_kp; ia++) {

			x_column8d[length_column8d - ia].addEventListener("mouseover", function () {

				let textKP1 = c_kp[MEGA_OP - ia].estimated_kp.toString();
				let currentTime1 = c_kp[MEGA_OP - ia].time_tag.toString();
				currentTime1 = currentTime1.substr(0, 10) + "   " + currentTime1.substr(11, 19);
				let subKP1 = textKP1.substring(0, 4);

				x_kp_txt.innerHTML = "KP: " + subKP1;
				x_kp_txtt.innerHTML = currentTime1 + " UTC";
			});

		}
	};



	let sli_swtm = document.getElementById("sli_swtime");
	let pp_swtm = document.getElementById("pp_swtime");

	pp_swtm.innerHTML = "Solar Wind Refresh Interval: " + sli_swtm.value + " Seconds";

	sli_swtm.oninput = function () {
		uni_60000 = parseInt(sli_swtm.value * 1000);
		clearInterval(wendar2);
		clearInterval(wendar1);
		n_swtime1 = parseInt(sli_swtm.value); n_swtime = 0;
		wendar2 = setInterval(renew_sw, uni_60000);
		wendar1 = setInterval(renew_kp, uni_60000 * 2);
		pp_swtm.innerHTML = "Solar Wind Refresh Interval: " + uni_60000 / 1000 + " Seconds";
	};

	const webdar_lol = document.getElementById("webdar");


	let sli_loginterval_js = document.getElementById("sli_loginterval");
	let pp_loginterval_js = document.getElementById("pp_loginterval");

	pp_loginterval_js.innerHTML = "Logs Clear Interval: " + sli_loginterval_js.value + "x ";


	sli_loginterval_js.oninput = function () {
		n_logcycle = (parseInt(sli_loginterval_js.value) + 1);
		n_logcycles = n_logcycle;
		pp_loginterval_js.innerHTML = "Logs Clear Interval: " + (n_logcycle-1) + "x ";
    }

	function wendar_sw() {
		if (n_swtime > 999) { n_swtime = 0; }
		else { n_swtime++; webdar_lol.innerHTML = (n_swtime1 - n_swtime); }
		
	};


	const kp_start1 = setTimeout(renew_kp, 1500);
	const sw_start1 = setTimeout(renew_sw, 3000);
	let wendar1 = setInterval(renew_kp, 120000);
	let wendar2 = setInterval(renew_sw, uni_60000);
	const wendar3 = setInterval(wendar_sw, 1000);
	const wendarpog = setTimeout(wendarpog1, 5000);
};
const wendaromegapog = setTimeout(OmegaOverlord, 2000);
const timemaker = setTimeout(dawnoftime, 1000);


