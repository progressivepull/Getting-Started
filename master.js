$( document ).ready(function() {
    console.log( "JQuery is ready!" );

    let footer = `
            <footer class="footer">
            <div class="container">
                <ul class="list-unstyled d-flex social-network">
                    <li class="ms-3"><p  class=" footer-text text-center">2025 Progressive Pull, Inc &copy; </p></li>
                    <li class="ms-3"><a class="link-dark" href="https://bsky.app/profile/progressivepull.bsky.social"><img class="website-social-network" src="lib/pull/dist/svg/bluesky.svg" alt="Blue Sky" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://www.tumblr.com/progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/tumblr.svg" alt="Tumblr" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://substack.com/@progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/substack.svg" alt="Substack" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://x.com/progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/twitter-x.svg" alt="Twitter X" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://mastodon.social/@progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/mastodon.svg" alt="Mastodon" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://gab.com/progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/gab.svg" alt="Gab" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://discord.gg/yGAdFJ9vQU"><img class="website-social-network" src="lib/pull/dist/svg/discord.svg" alt="Discord" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://app.parler.com/progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/parler.svg" alt="Parler" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://www.youtube.com/@progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/youtube.svg" alt="YouTube" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://github.com/progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/github.svg" alt="GitHub" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="contact.html"><img class="website-social-network" src="lib/pull/dist/svg/email.svg" alt="Email" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://www.tiktok.com/@progressivepull"><img class="website-social-network" src="lib/pull/dist/svg/tiktok.svg" alt="TikTok" width="30" height="30" ></a></li>
                    <li class="ms-3"><a class="link-dark" href="https://github.com/progressivepull/Resources"><img class="website-social-network" src="lib/pull/dist/svg/resources-folder.svg" alt="Resources Folder" width="30" height="30" ></a></li>
                </ul>
            </div>
        </footer>
    `;

    $('.pp-footer').html(footer);

    let navigation = `
    <nav class="navbar navbar-light bg-light">
        <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="navbar-brand" href="index.html"><img src="lib/pull/dist/svg/home.svg" width="30" height="30" class="d-inline-block align-top" alt=""><span class="nav-text">Progressive Pull</span></a></li>
            <li class="ms-3"><a class="navbar-brand" href="contact.html"><span class="nav-text">Contact</span></a></li>
            <li class="ms-3"><a class="navbar-brand" href="downloads.html"><span class="nav-text">Downloads</span></a></li>
            <li class="ms-3"><a class="navbar-brand" href="about.html"><span class="nav-text">About</span></a></li>
        </ul>
     </nav>
    `;

    $('.pp-navigation').html(navigation);

    let banner = `
        <div class="image-banner" >
            <img class="center " src="lib/pull/dist/images/Banner.png" alt="Italian Trulli" width="600" height="110">
        </div>
    `;

    $('.pp-banner').html(banner);

});