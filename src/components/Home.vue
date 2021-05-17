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
              <a @click.prevent="profile"  href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Pull</a>
              <!-- <a @click.prevent="profile"  href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Insert</a>
              <a @click.prevent="profile"  href="#" class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Update</a> -->
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
                          <label for="first_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Select you data</label>
                          <div class="px-20 mt-4">
                            <select v-model="option" class="w-full px-3 py-2 bg-white border rounded outline-none">
                              <option v-for="item in options" :key="item.name" :value="item">{{ item.name }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="showQuery"  class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <div class="px-20 mt-4">{{ option.data }}</div>
                    </div>
                  <div class="pt-5">
                    <div class="flex justify-end">
                      <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                      <button type="submit" @click="pull()" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pull Records</button>
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

import categories from "../data/categories.json";
import customers from "../data/customers.json";
import employees from "../data/employees.json";
import orders from "../data/orders.json";
import products from "../data/products.json";
import regions from "../data/regions.json";
import shippers from "../data/shippers.json";
import suppliers from "../data/suppliers.json";


export default {
  name: 'Home',
  data(){
    return {
        showQuery: false,
        option : null,
        options : [
          {
             "name" : "categories",
             "data" : categories
          },
          {
            "name" : "customers",
            "data" : customers
          },
          {
             "name" : "employees",
             "data" : employees
          },
          {
              "name" : "orders",
              "data" : orders
          },
          {
            "name" : "products",
            "data" : products
          },
          {
            "name" : "suppliers",
            "data" : suppliers
          },
          {
            "name" : "shippers",
            "data" : shippers
          },
          {
            "name" : "regions",
            "data" : regions
          }
      ]
    }
  },
  methods: {
    pull(){
      this.showQuery = true
      setTimeout(function(){ }, 60000);
    }
  }
}
</script>
