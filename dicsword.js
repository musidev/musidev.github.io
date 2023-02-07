let activeSelectedNavbarButton = null;
let activeSelectedLeftPaneButton = document.querySelector('[name="Friends"]');
let observer;

function addListenerToMessageButtons(whereToAttachListenerDOM, whereToInsertHTML) {
    addClickListeners(
        { whereToAttachListenerDOM: whereToAttachListenerDOM},
        {
            "HTML4" : function() {
                const builder = new MessageBuilder("HTML4", "dicsword/oldhtml.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("The story of how we became friends is pretty funny.")
                    .addFriendMessage("At first she didn't even notice me but after a while she found out that she can create small simple layouts with my help.")
                    .addFriendMessage("And that's how it all started.")
                    .buildMessages();
            },
    
            "HTML5" : function() {
                const builder = new MessageBuilder("HTML5", "dicsword/html5.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("We actually met some time in May 2022 through her husband and my older brother HTML4.")
                    .addFriendMessage("You see, her husband noticed that she was hanging around with HTML4 quite often but since HTML4 is an old loner that nobody really hangs out with anymore, he hooked us up.")
                    .addFriendMessage("She was weirded out by me at first but you see, like the charming dude I am, we were able to get along quite fast.")
                    .addFriendMessage("We've been friends ever since, each they we get to know each other a bit better. <3")
                    .buildMessages();
            },

            "CSS3" : function() {
                const builder = new MessageBuilder("CSS3", "dicsword/css3.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("Our story ain't too deep.")
                    .addFriendMessage("I like to hang around with my homie HTML5.")
                    .addFriendMessage("She likes to hang out with him as well.")
                    .addFriendMessage("No big deal.")
                    .addFriendMessage("I liked her sassy attitude, she liked my Sass.")
                    .addFriendMessage("End of story.")
                    .buildMessages();
            },
    
            "JS" : function() {
                const builder = new MessageBuilder("JS", "dicsword/js.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("Our relationship is complicated.")
                    .addFriendMessage("At first, she didn't really want anything to do with me...")
                    .addFriendMessage("Always saying that I was 'too complicated' or that her 'one braincell that she shares with 2 other people can't comprehend what's my deal' but like... I'm a real nice guy and I didn't wanna waste this opportunity because my buddies HTML5 and CSS3 told me that she's good company.")
                    .addFriendMessage("So we're trying to make it work and I'd say it's really getting somewhere.")
                    .buildMessages();
            },
    

            "Python" : function() {
                const builder = new MessageBuilder("Python", "dicsword/python.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("We don't talk anymore.")
                    .addFriendMessage("We don't talk anymore.")
                    .addFriendMessage("We don't talk anymore like we used to do.")
                    .addFriendMessage("We don't love anymore.")
                    .addFriendMessage("What was all of it for?")
                    .addFriendMessage("Oh we don't talk anymore like we used to dooooooo.")
                    .buildMessages();
            },
    
            "Czech" : function() {
                const builder = new MessageBuilder("Czech language", "dicsword/czechflag.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("I... know her since she was a little girl basically. But like not in a weird way, please don't call Chris Hansen or the police.")
                    .addFriendMessage("Go talk to German language, he's the real weirdo.")
                    .addFriendMessage("I got nothing else to say.")
                    .buildMessages();
            },

            "English" : function() {
                const builder = new MessageBuilder("English language", "dicsword/englishflag.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("Some lorem ipsum shit.")
                    .buildMessages();
            },
    
            "German" : function() {
                const builder = new MessageBuilder("German language", "dicsword/germanflag.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("Lemme guess...")
                    .addFriendMessage("Czech language sent you.")
                    .addFriendMessage("Yeah, we know her - can't tell you how long it's been.")
                    .addFriendMessage("So you can imagine it's been a long time if I can't even recall the first time we spoke to her.")
                    .addFriendMessage("I ain't telling you anything else.")
                    .addFriendMessage("Also wenn du keine Probleme haben willst, geh weg. JETZT.")
                    .buildMessages();
            },

            "Ukrainian" : function() {
                const builder = new MessageBuilder("Ukrainian language", "dicsword/ukrainianflag.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("??? *visible Ukrainian confusion*")
                    .addFriendMessage("Я її не дуже добре знаю.")
                    .buildMessages();
            },
    
            "Statistics" : function() {
                const builder = new MessageBuilder("Basic statistics", "dicsword/statistics.png");
                whereToInsertHTML.innerHTML = builder
                    .addFriendMessage("Some lorem ipsum shit.")
                    .buildMessages();
            },
        },
        changeActiveLeftPaneButton
    )
}

function changeButtonColor() {
    const navbarButtons = document.querySelectorAll(".navbar_button_upper_row");
    let lastSelectedButtonIndex = 0;
    for(let i = 0; i < navbarButtons.length; i++)
    {
        const navbarButton = navbarButtons[i];
        navbarButton.addEventListener("click", function() {
            const lastSelectedButton = navbarButtons[lastSelectedButtonIndex];
            lastSelectedButton.classList.remove("active");

            navbarButton.classList.add("active");

            lastSelecteduttonIndex = i;
            
            changeActiveLeftPaneButton(document.querySelector('[name="Friends"]'));
        }) 
    }
}

function changeDirectMessagesColor() {
    const messageButtons = document.querySelectorAll(".conversation_middle_row.selectable_elements_hover_active_type_1");
    let lastSelectedMessageIndex = -1;
    for(let i = 0; i < messageButtons.length; i++)
    {
        const messageButton = messageButtons[i];
        messageButton.addEventListener("click", function() {
            
            if(lastSelectedMessageIndex >= 0) {
                const lastSelectedMessage = messageButtons[lastSelectedMessageIndex];
                lastSelectedMessage.classList.remove("active");
            }
            
            messageButton.classList.add("active");

            lastSelectedMessageIndex = i;
        })
    }
}

function changeActiveButton(newDOMElement) {
    activeSelectedNavbarButton?.classList.remove("active");
    newDOMElement.classList.add("active");
    activeSelectedNavbarButton = newDOMElement;
}

function changeActiveLeftPaneButton(newDOMElement) {
    activeSelectedLeftPaneButton?.classList.remove("active");
    newDOMElement.classList.add("active");
    activeSelectedLeftPaneButton = newDOMElement;
}

const clickEvents = {
    beforeClick: (el) => {},
    afterClick: (el) => {}
}

function addClickListeners({ whereToAttachListenerDOM }, buttonEvents, eventForEachButtonAfterClick = clickEvents) 
{
    let {beforeClick, afterClick} = eventForEachButtonAfterClick;
    if(!beforeClick) beforeClick = (el) => {}
    if(!afterClick) afterClick= (el) => {}

    for(let i = 0; i < whereToAttachListenerDOM.length; i++)
    {
        const pieceOfDOM = whereToAttachListenerDOM[i];
        const name = pieceOfDOM.getAttribute("name");
        pieceOfDOM.addEventListener("click", function(ev){ 
            beforeClick(pieceOfDOM);
            buttonEvents[name](pieceOfDOM); 
            afterClick(pieceOfDOM);
        });
    }
}

function hideRandomOnlineFriends(friendsDOM) {
    const onlineFriendList = friendsDOM.children ?? friendsDOM;

    for (let i = 0; i < onlineFriendList.length; i++) {
        if (Math.random() < 0.5) {
            onlineFriendList[i].classList.add('hidden');
        } else {
            onlineFriendList[i].classList.add('online');
        }
    }
}

function listedFriendsClickAndSearchBarEvent()
{
    // Make the behavior same as when you press on friends in the side panel
    document.querySelector("div > ul.all_friends_list").querySelectorAll("li").forEach(function (el){
        el.addEventListener("click", function () {
            const nameOfElement = el.getAttribute("name");
            document
                .querySelector(`#direct_messages_middle_row .conversation_middle_row[name="${nameOfElement}"]`)
                .dispatchEvent(new Event("click"));
        })
    });
    addSearchGroupEvent(
        document.querySelector(".all_friends_list"), 
        document.getElementById("searchbar_all_friends"),
        ".friend_name"
    );
}

function addReactiveButtonFunctions() {
    const mainBody = document.querySelector("#main_right_column_body");
    const friendsMoneydrainButtonMiddleRow = document.querySelectorAll(".friends_moneydrain_button_middle_row");
    
    addClickListeners(
        { whereToAttachListenerDOM: document.querySelectorAll(".navbar_button_upper_row")},
        {
            "Online" : function() {
                const onlineHTMl = htmlInsertions.onlineButton;
                mainBody.innerHTML = onlineHTMl;

                const onlineFriendList = document.querySelector('.all_friends_list').children;
                listedFriendsClickAndSearchBarEvent();

                hideRandomOnlineFriends(onlineFriendList)
            },
            "All" : function() {
                const onlineHTMl = htmlInsertions.allButton;                
                mainBody.innerHTML = onlineHTMl;
                listedFriendsClickAndSearchBarEvent();

            },
            "Pending" : function() {
                const onlineHTMl = htmlInsertions.pendingButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "Blocked" : function() {
                const onlineHTMl = htmlInsertions.blockedButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "Add Friend" : function() {
                const onlineHTMl = htmlInsertions.addFriendButton;
                mainBody.innerHTML = onlineHTMl;
            }
        }
    )

    let activeServerDOM = document.querySelector('[name="Home"]');
    addClickListeners(
        { whereToAttachListenerDOM: document.querySelectorAll(".servers_left_column")},
        {
            "Home" : function(el) {
                if(el === activeServerDOM)
                {
                    return;
                }
                const onlineHTMl = htmlInsertions.homeButton;
                mainBody.innerHTML = onlineHTMl;
                document.querySelector('[name="Friends"]').dispatchEvent(new Event('click'));
            },
            "FSE" : function() {
                const onlineHTMl = htmlInsertions.fseButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "UJEP" : function() {
                const onlineHTMl = htmlInsertions.ujepButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "GYMTCE" : function() {
                const onlineHTMl = htmlInsertions.gymtceButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "Add_new_server" : function() {
                const onlineHTMl = htmlInsertions.addNewServerButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "Explore_servers" : function() {
                const onlineHTMl = htmlInsertions.exploreServersButton;
                mainBody.innerHTML = onlineHTMl;
            },
            "Download_apps" : function() {
                const onlineHTMl = htmlInsertions.downloadAppsButton;
                mainBody.innerHTML = onlineHTMl;
            }
        },
        {   
            beforeClick: (el) => {
                friendsMoneydrainButtonMiddleRow.forEach(el => el.classList.remove('active'));
            },
            afterClick: (el) => {
                if(el === activeServerDOM) 
                {
                    return;
                }
                activeServerDOM?.classList?.remove("active");
                activeServerDOM = el;
                activeServerDOM.classList.add("active")
            }
        }
    )

    addClickListeners(
        { whereToAttachListenerDOM: friendsMoneydrainButtonMiddleRow},
        {
            "Friends" : function() {
                const onlineHTMl = htmlInsertions.Friends;
                mainBody.innerHTML = onlineHTMl;

                hideRandomOnlineFriends(document.querySelector('.all_friends_list').children);
                const moneyDrainNavbar = document.getElementById('moneydrain_navbar')
                const friendsNavbar = document.getElementById('friends_navbar')

                moneyDrainNavbar.classList.add('hidden')
                friendsNavbar.classList.remove('hidden')
            },
    
            "Moneydrain" : function() {
                const onlineHTMl = htmlInsertions.Moneydrain;
                mainBody.innerHTML = onlineHTMl;
                
                const moneyDrainNavbar = document.getElementById('moneydrain_navbar')
                const friendsNavbar = document.getElementById('friends_navbar')

                moneyDrainNavbar.classList.remove('hidden')
                friendsNavbar.classList.add('hidden')
            }
        },
        {
            afterClick: changeActiveLeftPaneButton
        }
    )

    addClickListeners(
        { whereToAttachListenerDOM: [document.getElementById("profile_info")] },
        {
            "About_me" : function() {
                const onlineHTMl = htmlInsertions.aboutMe;
                mainBody.innerHTML = onlineHTMl;
            },
        }
    )

    addListenerToMessageButtons(document.querySelectorAll("#direct_messages_middle_row .conversation_middle_row"), mainBody);
}

function addSearchGroupEvent(groupsDOM, searchbarDOM, childStringSelector = ".conversation_name_middle_row"){
    const { children } = groupsDOM; 

    searchbarDOM.addEventListener("keyup", function(ev) {
        const searchInput = ev.target;

        for(let i = 0; i < children.length; i++){
            const singleGroup = children[i];
            const nameOfGroup = singleGroup.querySelector(childStringSelector);

            if(!nameOfGroup.innerHTML.toLowerCase().includes(searchInput.value.toLowerCase())){
                singleGroup.classList.add("hidden");
            } else {
                singleGroup.classList.remove("hidden");
            }
        }
    })
}

function saveHomeStateToHtmlInsertions() {
    htmlInsertions.homeButton = document.getElementById('main_right_column_body').innerHTML;
}

function main() {
    changeButtonColor();
    addReactiveButtonFunctions();
    addSearchGroupEvent(document.querySelector(".direct_messages_list_middle_row"), document.getElementById("group_search"));
    saveHomeStateToHtmlInsertions();
    hideRandomOnlineFriends(document.querySelector('.all_friends_list').children)
    listedFriendsClickAndSearchBarEvent();
}

main();