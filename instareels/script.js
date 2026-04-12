const reels = [
  {
    username: "alex.visuals",
    userProfile: "https://i.pravatar.cc/150?img=1",
    videoUrl: "./videos/reel1.mp4",
    caption: "Morning vibes 🌅",
    isLiked: true,
    likeCount: 1240,
    commentCount: 89,
    isFollowed: false
  },
  {
    username: "travelwithsam",
    userProfile: "https://i.pravatar.cc/150?img=2",
    videoUrl: "./videos/reel2.mp4",
    caption: "Lost in mountains 🏔️",
    isLiked: false,
    likeCount: 980,
    commentCount: 54,
    isFollowed: true
  },
  {
    username: "urban.fit",
    userProfile: "https://i.pravatar.cc/150?img=3",
    videoUrl: "./videos/reel3.mp4",
    caption: "Discipline beats motivation 💪",
    isLiked: true,
    likeCount: 2100,
    commentCount: 143,
    isFollowed: true
  },
  {
    username: "food.diaries",
    userProfile: "https://i.pravatar.cc/150?img=4",
    videoUrl: "./videos/reel4.mp4",
    caption: "Street food therapy 😋",
    isLiked: false,
    likeCount: 760,
    commentCount: 31,
    isFollowed: false
  },
  {
    username: "tech.bytes",
    userProfile: "https://i.pravatar.cc/150?img=5",
    videoUrl: "./videos/reel5.mp4",
    caption: "Code. Build. Repeat. 💻",
    isLiked: true,
    likeCount: 1540,
    commentCount: 97,
    isFollowed: true
  }
];

var allReels = document.querySelector('.allreels')

let sum = ''
reels.forEach(function(elem, idx){
  sum = sum  + ` <div class="reels"> 
                    <video autoplay loop muted src="${elem.videoUrl}"></video>
                    <div class="bottom">
                        <div class="line">
                            <div class="profile">
                            <img src="${elem.userProfile}" alt="">
                            </div>
                            <h3 class="username">${elem.username}</h3>
                            <button class="Follow"><b>${elem.isFollowed? "Unfollow": "Follow"}</b></button>
                        </div>
                        <div class="caption">
                            ${elem.caption}
                        </div>
                    </div>
                     <div class="side">
                        <div id="${idx}" class="like">
                        ${elem.isLiked? '<i class="ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}
                        <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                        <i class="ri-chat-3-line"></i>
                        <h6>${elem.commentCount}</h6>
                        </div>
                        <i class="ri-send-plane-line"></i>
                        <i class="ri-bookmark-line"></i>
                        <i class="ri-more-2-line"></i>
                    </div>
                </div>`
})


allReels.innerHTML = sum

// video.forEach(video => {
//     video.addEventListener("click", ()=>{
//         if (video.paused){video.play();}
//         else {video.pause();}
//     })
// })

// allReels.addEventListener("click", function(dets){
//     if(!reels[dets.target.id].isLiked){
//         reels[dets.target.id].likeCount++
//         reels[dets.target.id].isLiked = true
//     }
//     else{
//         reels[dets.target.id].likeCount--
//         reels[dets.target.id].isLiked = false

//     }
// })