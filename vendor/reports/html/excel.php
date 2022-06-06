<?php 
 include_once ('../login.php');
 session_start();
?>
<?php
$connection;
$output = '';
if(isset($_GET['dsub'])){
  $new = $_GET['sdate'] ;
  unset($_SESSION['sdate']);
  unset($_SESSION['ddate']);
  if($new != null){
  str_replace("//","-" , $new);
  // echo $new;
  $_SESSION['sdate'] = $new;}
  header('Location: info.php'); 
}

if(isset($_GET['tdown'])){
        $file = "daily report.xlsx" ;
        $sql = "SELECT food , SUM(amount) tamount FROM orders where resturant= '$value' and date = CURDATE() group by food order by amount desc ;   ";
        $result = $connection->query($sql);
        $output .= '
                   <table border=1 cellpadding="0" cellspacing="0" border="0">
                     <tr>
                       <th>Foodname</th>
                       <th>Amount</th>
                       <th>Price </th>
                       <th>Total</th>
                     </tr>
        ';
        if ($result){  
            while($row = $result->fetch(PDO::FETCH_BOTH)){
                $output .='<tr>
                           <td>'.
                            $row['food']. 
                           '</td>
                           <td>'.                   
                            $row['tamount'].   
                           '</td>
                           <td>$1.38</td>
                           <td>+2.01</td>
                           </tr>';
                        
            } 
            $output .='</table>'; 
            echo $output;    
           }
    header('Content-Disposition: attachment; filename=' . $file );
    header('Content-Type: application/xls');}
    

 if(isset($_GET['TTdown'])){
  $value = $_SESSION['name'];

  if($_SESSION['ddate']){
    $date = $_SESSION['ddate'];
    $sql= "SELECT * , SUM(amount) tamount FROM orders INNER JOIN menu ON orders.food = menu.food where resturant= '$value' and date = '$date'  
    group by price order by date desc ;  ";
      $file = "$date.xlsx"  ;
      
  }
  else{
     $sql= "SELECT * , SUM(amount) tamount FROM orders  
     INNER JOIN menu ON orders.food = menu.food where resturant= '$value' group by date,price order by date desc;  "; 
     $file = "totalreport.xlsx";}
  

  $result = $connection->query($sql);
  $output .= '
             <table border=1 cellpadding="0" cellspacing="0" border="0">
               <tr>
                 <th>Foodname</th>
                 <th>Amount</th>
                 <th>Price </th>
                 <th>Total</th>
               </tr>
  ';
  if ($result){  
      while($row = $result->fetch(PDO::FETCH_BOTH)){
          $output .='<tr>
                     <td>'.
                      $row['food']. 
                     '</td>
                     <td>'.                   
                      $row['tamount'].   
                     '</td>
                     <td>$1.38</td>
                     <td>+2.01</td>
                     </tr>';
                  
      } 
      $output .='</table>'; 
      echo $output;    
     }
header('Content-Disposition: attachment; filename=' . $file );
header('Content-Type: application/xls');}

?>