<template>
        <div id="header">
            <!--begin:nav-->
            <ul id="nav">
                <li class="active"> <a href="#">  <font-awesome-icon icon="fas fa-home" /> Home</a></li>
                <li><a href="">library </a></li>
                <li><a href="">Radio</a></li>
                <li>
                    <a href="">More <font-awesome-icon icon="fa-solid fa-angle-down" /></a>
                    <ul class="subnav">
                        <li><a href="">New</a></li>
                        <li><a href="">chill</a></li>
                        <li><a href="">Music Favourite</a></li>
                    </ul>
                </li>

            </ul>
            <div class="search-bth">
                <font-awesome-icon icon="fa fa-search" />
            </div>
            <!-- end:nav-->
        </div>
</template>
<script>
export default {
  
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#header{
    position: fixed;
    height: 60px;
    background-color: black;
    list-style-type: none;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
}
#nav{
    display: inline-block;
    
}
#nav > li {
    display: inline-block;
}
#nav > li > a {
    color: #fff;
    text-transform: uppercase;
    display: inline-block;
}
#nav li a{
    padding: 0px 25px;
    line-height: 60px;
    text-decoration: none;
}
#nav .nav-home{
    color: #fff;
    font-size: 14px;
}
#nav li a:hover:not(.active) {
    background-color: #1fae7e;
  }
  
.active {
    background-color: #1fae7e;
}
#nav > li:hover > a,
#nav .subnav li:hover  {
    color: #fff;
    background-color: #1fae7e;
    
}
#nav li:hover .subnav{
    display: block;
    
}
#header .search-bth {
    z-index: 2;
    color: #fff;
    float: right;
    line-height: 60px;
    padding: 0 23px;
    cursor: pointer;

}
#header .search-bth:hover{
    background-color: #1fae7e;
}
#nav .subnav{
    display: none;
    position:absolute;
    background-color: #fff;
    box-shadow: 0 0 10px rgb(0, 0, 0,0.3);
    list-style: none;
    
}

#nav .subnav a{
    color: black;
    padding: 0 16px;
    line-height: 36px;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    
}

</style>