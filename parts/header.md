<!--  This is the header of the PHPizza skin, the default skin on the CMS also named PHPizza. -->
<script src="/skins/PHPizza/js/account-menu.js"></script>

<!-- Logo + sitename -->
* [
    ![{{{sitename}}} Logo]({{{siteLogoPath}}})
    {{{sitename}}}
]( {{{homePage}}} )

* <button id="account_switch_button" onclick="toggleAccountMenu()">
    <img src="/node_modules/feather-icons/dist/icons/user.svg" class="icon"></img>
</button>

<div id="user-dropdown" class="">

* <img src="/node_modules/feather-icons/dist/icons/user.svg" class="icon" width="64" height="64"></img>
* Currently logged in as {{{userName}}}
* <a href="/SwitchUser.php" class="btn">Switch User</a>

</div>

<!-- End of header -->