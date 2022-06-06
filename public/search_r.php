<?php 
 if (!isset($_SESSION)) 
    {session_start();}
 require_once('../config/connect.php');
 $uname=$_SESSION['uname'];
    if(isset($_GET['date']))
        $date=$_GET['date'];
    else
        $date ='';
    if(isset($_GET['searchQuery']))
        $search=$_GET['searchQuery'];
    else
        $search =null;    
    if($search && ($date!=''))
        $query = "SELECT * FROM orders WHERE cust_username='$uname' AND date='date' AND resturant LIKE '%$search%'";
    else 
    if($search)
        $query = "SELECT * FROM orders WHERE cust_username='$uname' AND resturant LIKE '%$search%'";
    else
     if($date!='')
        $query = "SELECT * FROM orders WHERE cust_username='$uname' AND date='date'";
    $r = $conn->query($query);
    while($row = $r->fetch())
    {
        $rname=$row['resturant'];
        $d=$row['date'];
        $id=$row['id'];
        echo <<< _End
                 <div class="re_items">
                 <div>$rname</div>
                <div>$d</div>
                <div>
                <form>
                <input type="hidden" value="$id">
                <Button type="submit">Print</Button>
                </form>
                </div>
                 </div>
        _End;
        
        }

    echo  "
    </body>
    </html>
    ";       
    $pdo = null;

    ?>
        
