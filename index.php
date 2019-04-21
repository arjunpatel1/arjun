<? 
 include("included/header.html"); 
 if (isset($_GET['pages'])) {
 switch ($_GET['pages']) {
 	case 'dashboard':
 	include("pages/deshboard.php"); 
 	echo '<title>Dashboard - Web Development and Designing - Maxicon</title>';
 	break;
 	case 'services':
    include("included/services.html"); 
    echo '<title>Services - Web Development and Designing - Maxicon</title>';
 	break;
 	case 'portfolio':
 	include("pages/deshboard.php"); 
 	echo '<title>Protfolio - Web Development and Designing - Maxicon</title>';
 	break;
 	case 'about_us':
 	include("pages/about_us.php");
 	echo '<title>About Us - Web Development and Designing - Maxicon</title>';
 	break;
 	case 'Solutions':
 	include("included/solutions.html"); 
 	echo '<title>Solutions- Web Development and Designing - Maxicon</title>';
 	break;
 	case 'Contact_us':
 	include("included/contact.html"); 
 	echo '<title>Contct Us - Web Development and Designing - Maxicon</title>';
 	break;
 	default: 
 	include("included/404.html"); 
 	echo '<title>404 - Web Development and Designing - Maxicon</title>';
 	break;
 }
}else{
	include("pages/deshboard.php"); 
}
 include ('included/footer.html');
  ?>
  <style type="text/css">
  	.loader {
    position: fixed;
    text-align: center;
    top:0;
    padding-top: 15%;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #0000008f;
    opacity: 1;
  </style>
  <div class="loader">
  <svg style="    width: 100px;
    background: #00000054;
    border-radius: 76px;" version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
    <circle fill="none" stroke="white" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" transform="rotate(106.283 50 50)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
  </circle>
  <circle fill="none" stroke="white" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39" transform="rotate(-106.283 50 50)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
  </circle>
  <g fill="#fff">
  <rect x="30" y="35" width="5" height="30" transform="translate(0 -2.52312)">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform>
  </rect>
  <rect x="40" y="35" width="5" height="30" transform="translate(0 -0.52312)">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform>
  </rect>
  <rect x="50" y="35" width="5" height="30" transform="translate(0 1.47688)">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
  </rect>
  <rect x="60" y="35" width="5" height="30" transform="translate(0 3.47688)">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform>
  </rect>
  <rect x="70" y="35" width="5" height="30" transform="translate(0 4.52312)">
    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform>
  </rect>
  </g>
</svg>
</div>
<script type="text/javascript">
	jQuery(window).on("load",function(){ 
$(".loader").fadeOut(2000);
});
</script>