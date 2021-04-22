<template>
  <div>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <div class="flex flex-col h-0 flex-1 bg-gray-800">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
            </div>
            <nav class="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
              <a @click.prevent="profile" href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                Profile
              </a>
              <a   @click.prevent="family" href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                Family
              </a>
              <a   @click.prevent="settings" href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <svg class="w-6 h-6 mr-2" fill="currentColor"  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                Settings
              </a>   
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="py-4">
              <div class="border-gray-200 rounded-lg h-96">
                <form class="space-y-8 divide-y divide-gray-200">
                  <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                      <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Welcome to Atlan Business intelligence tool</h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">Select your data below. </p>
                      </div>
                      <div class="space-y-6 sm:space-y-5">
                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label for="first_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Table</label>
                          <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label for="last_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Select the columns</label>
                          <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label for="last_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Conditions</label>
                          <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-5">
                    <div class="flex justify-end">
                      <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                      <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pull Records</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'UserHome',
  computed: {
    name() {
      return this.$store.state.name
    },
    routerPath(){
      return this.$route.name;
    },
    showSettings(){
      return (this.routerPath != "non-parent" && this.routerPath != "parent" ) ? true : false
    },
    showFamily(){
      return ( this.routerPath != "parent" && this.routerPath != "non-parent" && this.routerPath != "non-parent-edit" ) ? true : false
    }
  },
  data(){
    return {
       routerName: ''
    }
  },
  mounted(){
    this.setRouterName()
  },
  watch: {
    routerPath(newValue){
      if(newValue){
        this.$router.name = this.routerPath
      }
    }
  },
  methods: {
    family(){
      this.$router.replace('/user-home/family')
    },
    setRouterName(){
      this.routerName = this.routerPath
    },
    settings(){
      this.$router.replace('/user-home/settings')
    },
    profile(){
      if(this.showSettings == true){
        this.$router.replace('/user-home/parent-edit')
      }else{
        this.$router.replace('/user-home/non-parent-edit')
      }      
    },
    logout(){
      this.$router.replace('/')
    }
  }
}
</script>
