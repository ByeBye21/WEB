<?php
$result = false;

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == 'younes' && $password == '123') {
        $result = true;
    } else {
        $result = false;
        header("refresh:3;url=login.html");
    }
}
?>


<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Teknolojileri</title>
    <!-- Bootstrap CSS dosyası -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Web Teknolojileri</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Ana Sayfa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="hakkimda.html">Hakkımda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ozgecmis.html">Özgeçmiş</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sehrim.html">Şehrim</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="mirasimiz.html">Mirasımız</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="iletisim.html">İletişim Sayfası</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    

    <section>
          <div class="row my-3 ">
              <div class="col-lg-12 my-4">
                  <h1 class="display-4 text-black" align="center">
                      <?php
                      if ($result == true) {
                          echo $username . " Hoşgeldiniz";
                      } else {
                          echo "Kullanıcı adı ya da şifre hatalı";
                      }
                      ?>
                  </h1>
              </div>
          </div>
    </section>

</body>
</html>