<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 92vh;">
      <!-- side nav -->
      <aside class="w-60 bg-black h-full flex-none relative">
        <div class="p-6">
          <svg viewBox="0 0 1134 340" class="w-32 spotify-logo--text stroke-current text-white"><title>Spotify</title><path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
        </div>
        <div class="mx-2">
          <button v-for="(page, index) in pages" :key="index" @click="selectedID = page.id" :class="`w-full rounded px-5 py-2 text-sm font-semibold text-left flex items-center justify-start ${selectedID == page.id ? 'bg-light text-white' : 'text-lightest'}`">
            <span class="material-icons md-light mr-3">{{ page.icon }}</span> 
            <span>{{ page.name }}</span>
          </button>
        </div>
        <div class="mx-7 mt-7 space-y-4">
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <img src="/img/addNew.png" class="h-6 w-6 mr-3 rounded-sm"/>
            <span class="text-lightest text-sm font-semibold">Create Playlist</span>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <img src="/img/liked.png" class="h-6 w-6 mr-3 rounded-sm"/>
            <span class="text-lightest text-sm font-semibold">Liked Songs</span>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <img src="/img/episodes.png" class="h-6 w-6 mr-3 rounded-sm"/>
            <span class="text-lightest text-sm font-semibold">Your Episodes</span>
          </button>
          <!-- <div class="h-px w-full bg-light my-3"></div> -->
        </div>
        <!-- <div class="mx-7"> 
          <div class="w-full h-24 overflow-y-scroll">
            <p v-for="(playlist, index) in playlists" :key="index" class="text-lightest hover:text-white text-sm py-1">{{ playlist.name }}</p>
          </div>
        </div> -->
        <div class="absolute bottom-0 mx-7 mb-8 space-y-2">
          <button class="block text-xs text-lightest hover:text-white hover:underline">Cookies</button>
          <button class="block text-xs text-lightest hover:text-white hover:underline">Privacy</button>
        </div>
      </aside>
      <!-- main content -->
      <main class="w-full h-full relative overflow-y-scroll">
        <!-- header -->
        <div class="w-full sticky top-0 py-4 px-8 flex items-center justify-between bg-dark">
          <div class="flex items-center space-x-4">
            <button class="rounded-full bg-black w-8 h-8 p-1 text-lightest">
              <span class="material-icons">chevron_left</span>
            </button>
            <button class="rounded-full bg-black w-8 h-8 p-1 text-lightest">
              <span class="material-icons">chevron_right</span>
            </button>
          </div>
          <div class="relative flex items-center justify-end space-x-8">
            <button class="uppercase text-white text-sm font-bold tracking-widest transform hover:scale-105">Sign Up</button>
            <button class="uppercase bg-white text-black text-sm font-bold px-8 py-2 rounded-full tracking-widest transform hover:scale-105">Log In</button>
            <!-- <div class="absolute bg-light w-full rounded mt-32">
              <button class="w-full text-sm py-2 text-white hover text-white border-b border-lightest opacity-75 hover:opacity-100">Account</button>
              <button class="w-full text-sm py-2 text-white hover text-white opacity-75 hover:opacity-100">Log out</button>
            </div> -->
          </div>
        </div>
        <!-- cards -->
        <div class="bg-gradient-to-b from-light via-dark to-dark">
          <div class="px-8 pt-3 pb-6">
            <div class="flex items-center justify-between mb-3">
              <h1 class="text-2xl font-bold text-white hover:underline cursor-pointer">Barisan Playlist Andalan</h1>
              <h2 class="pt-4 text-xs text-lightest font-bold uppercase tracking-widest hover:underline cursor-pointer mb-3">See all</h2>
            </div>
            <div class="w-full flex flex-wrap">
              <div v-for="(topPlaylist, index) in topPlaylists" :key="index" class="p-2 w-56">
                <div class="bg-card hover:bg-light cursor-pointer w-full h-auto rounded-lg p-5 relative">
                  <div class="absolute w-full h-ful flex items-end justify-end p-12 mt-10 opacity-0 hover:opacity-100">
                    <div class="bg-green text-white rounded-full h-10 w-10 flex items-center justify-center">
                      <span class="material-icons">play_arrow</span>
                    </div>
                  </div>
                  <img :src="topPlaylist.src" class="h-auto w-full shadow mb-5">
                  <h1 class="text-md font-semibold text-white mb-1 truncate">{{ topPlaylist.title }}</h1>
                  <p class="text-sm text-lightest leading-4 line-clamp-2">{{ topPlaylist.caption }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-8 pt-3 pb-6">
            <div class="flex items-center justify-between mb-3">
              <h1 class="text-2xl font-bold text-white hover:underline cursor-pointer">Charts</h1>
            </div>
            <div class="w-full flex flex-wrap">
              <div v-for="(chart, index) in charts" :key="index" class="p-2 w-48">
                <div class="bg-card hover:bg-light cursor-pointer w-full h-auto rounded-lg p-5">
                  <img :src="chart.src" class="h-auto w-full shadow mb-5">
                  <h1 class="text-md font-semibold text-white mb-1 truncate">{{ chart.title }}</h1>
                  <p class="text-sm text-lightest leading-4 line-clamp-2">{{ chart.caption }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-8 pt-3 pb-6">
            <div class="mb-3">
              <h1 class="text-2xl font-bold text-white hover:underline cursor-pointer">Focus</h1>
              <span class="text-sm text-lightest">Music to help you concentrate.</span>
            </div>
            <div class="w-full flex flex-wrap">
              <div v-for="(chart, index) in charts" :key="index" class="p-2 w-48">
                <div class="bg-card hover:bg-light cursor-pointer w-full h-auto rounded-lg p-5">
                  <img :src="chart.src" class="h-auto w-full shadow mb-5">
                  <h1 class="text-md font-semibold text-white mb-1 truncate">{{ chart.title }}</h1>
                  <p class="text-sm text-lightest leading-4 line-clamp-2">{{ chart.caption }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- footer -->
    <footer class="w-full bg-gradient-to-r from-pink-700 via-purple-500 to-blue-400" style="height: 8vh;">
      
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      pages: [
        { id: 'home', name: 'Home', icon: 'home' },
        { id: 'search', name: 'Search', icon: 'search' },
        { id: 'library', name: 'Your Library', icon: 'bar_chart' },
      ],
      selectedID: 'home',
      playlists: [
        { name:  'All New Indie'},
        { name:  'Mellow'},
        { name:  'Classic Road Trip Songs'},
        { name:  'Lana Del Rey Radio'},
      ],
      topPlaylists: [
        { src: '/img/playlists/playlist-1.jpg', title: 'Puncak Klasemen', caption: 'Deretan musik Indonesia terpopuler zaman sekarang' },
        { src: '/img/playlists/playlist-2.jpg', title: 'Women of Indonesia', caption: 'Artis wanita tanah air yang memperkaya seni Indonesia' },
        { src: '/img/playlists/playlist-3.jpg', title: 'Naik Daun', caption: 'Lagu-lagu terkini yang sedang banyak didengar' },
        { src: '/img/playlists/playlist-4.jpg', title: 'Pop Rising Indonesia', caption: 'Lagu-lagu teranyar yang akan menjadi' },
        { src: '/img/playlists/playlist-5.jpg', title: 'Fresh Finds Indonesian Songs', caption: 'Temukan beragam musik terbaru dari Indonesia' },
        { src: '/img/playlists/playlist-6.jpg', title: 'Ke Seberang', caption: 'Talenta tanah air yang dapat menyeberang' },
        { src: '/img/playlists/playlist-7.jpg', title: 'Alunan Kesukaan', caption: 'Lagu-lagu kesukaan dari beberapa waktu' },
      ],
      charts: [
        { src: '/img/charts/chart-1.jpg', title: 'Top 50 - Indonesia', caption: 'Your daily update of the most played tracks in Indonesia' },
        { src: '/img/charts/chart-2.jpg', title: 'Top 50 - Global', caption: 'Your daily upadte of the most played tracks globally' },
        { src: '/img/charts/chart-3.jpg', title: 'Hot Hits Indonesia', caption: 'Hits terpanas dari LISA, Coldplay, BTS serta artis lainnya' },
      ],
    }
  }
}
</script>

<style>

</style>
