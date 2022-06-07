<?php 
  $host = 'localhost';

  $data = 'hes2'; 
  $user = 'root';
  
  $pass = '';
  
  $chrs = 'utf8mb4';
  $attr = "mysql:host=$host;dbname=$data;charset=$chrs";
  $opts =
  [
  PDO::ATTR_ERRMODE
  => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES => false,
  ];
  
  try
  {
      $pdo = new PDO($attr, $user, $pass, $opts);
  }
  catch (PDOException $e)
  {
  
      throw new PDOException($e->getMessage(), (int)$e->getCode());
  }
    if(isset($_GET['filter1']))
        $filter1=$_GET['filter1'];
    if(isset($_GET['filter2']))
        $filter2=$_GET['filter2'];

    if(isset($_GET['filter3']))
        $filter3=$_GET['filter3'];


    $query = "SELECT * FROM menu ";
    
    $r = $pdo->query($query);

     echo <<< _End
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="nn.js"></script>
                <title>HAGERE EAT SIMPLE ONLINE FOOD ORDERING SYSTEM</title>
            
                
                <!-- font awesome cdn link  -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            
                <!-- custom css file link  -->
                <link rel="stylesheet" href="../../css/menu/style.css">
                <link rel="stylesheet" href="../../css/menu/cart1.css">
            
            </head>
            <body>
                
            <!-- header section starts      -->
            
            <div>
                    <header id="navigation" >
                    <a href="index.html" class="logo">  Hagere Eat Simple</a>
                    
                        <nav class="navbar">
                            <a href="../../../Project/index.html">Home</a>
                            <a href="resources/html/br.html">Browse</a>
            
                        </nav>
        
                        <div class="icons">
                            <i class="fas fa-bars" id="menu-bars"></i>
                            <a href="#" class="fas fa-shopping-cart" id="cart" onclick="openModel()"></a>
                            <label for="check">
                            <i class="fas fa-user" id="sidebar_btn" onclick="func()"></i>
                        </label>
                        </div> 
            </header>
            <!--profile part-->
            
            <div class="sidebar" id="sidebar">
            
                <h4 id="profile1">Username:  </h4>
                <h4 id="profile2">Name: </h4>
                <h4 id="profile3">Email: </h4>
                <h4 id="profile4">Phone: </h4>
            </form>
            <br><br>
            <details id="details">
                <summary id="sum">Tokens</summary>
                <div id=amount>
                Amount: 2500 Tokens
                </div> 
                Expiration Date: 12/06/2022 <br>
                <a href="about_us.html#buy">Where to buy tokens.</a>
            </details>
            <br><br>
            <div>
            <a onclick="logout();"><i class="fas fa-desktop"></i><span>Log Out</span></a>
            <a href="resources/html/settingsp.html"><i class="fas fa-info-circle"></i><SPan>Settings</SPan></a></div>
            
            </div> 
            <!--profile end-->
            <!-- dishes section starts  -->
            
            <section class="dishes" id="dishes">
                <h3 class="sub-heading"> Menu </h3>
                <h1 class="heading" id="glow">Available foods</h1>
                <div class="box-container"> 
                <div>
                <summary  id="glow1"><b>Result</b></summary>
_End; 
           
            while( $row = $r->fetch())
            {
        $fName = htmlspecialchars($row['food']);
        $price = htmlspecialchars($row['price']);
        if(strpos($row['category'], $filter1) === false)
            continue;
        if(strpos($row['category'], $filter2) === false)
            continue;
        if(strpos($row['category'], $filter3) === false)
            continue;
        {
            echo <<< _End
            <div class="pos" id="pos">
                <div class="box">
                    <img class = "food-image" src="../images/photos/banana-bread.jfif" alt=""><!--class-->
                    <h3 class="food-title" id="f1">$fName</h3><!--class-->
                    
                    <div class="shop-item-details">                   <!--   start div-->
                        <span class="food-price">$price</span>    <!--class -->
                        <a class="btn btn-primary  order-now">Add to cart</a>
                    </div>     <!-- end div-->
                </div>  
            _End; 
            }
        }
        echo  "
        <script src='../../js/menu/cart1.js'> </script> 
        <script src='../../js/menu/cart.js'></script>
        <script src='../../js/menu/script.js'></script>

        <!-- custom js file link  -->
        <script src='../../js/menu/scriptmenu.js'></script>
        </body>
        </html>
        ";       
        $pdo = null;

    ?>