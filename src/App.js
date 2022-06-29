import './App.css';
import image from './img1.jpg'
import image3 from './img3.jpg'
import git from './github-brands.svg'
import inst from './instagram-brands.svg'

function App() {
  return (
    <div>
      <div className='lg:flex justify-center'>
        <div class="max-w-full m-5 bg-white rounded-xl shadow-md overflow-hidden lg:max-w-xs ">
          <div class="">
            <div class="lg:shrink-0">
              <img class="h-48 w-full object-cover lg:h-24 lg:w-full" src={image3} alt="" />
            </div>
            <div class="p-8 bg-[#ffffff]">
              <img
                  className="inline-block h-20 w-20 rounded-xl ring-2 ring-white -translate-y-16 z-20"
                  src={image}
                  alt=""
                />
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black bg-[#ffffff] -translate-y-12 z-20">Ильин Андрей</a>
              <p class="mt-2 text-gray-400 text-sm bg-[#ffffff] -translate-y-10 z-20">Middle Frontend-Developer</p>
              <p class="mt-2 text-gray-400 text-sm bg-[#ffffff] -translate-y-10 z-20">21 год</p>
              <button class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded w-full lg:w-56">
                Ссылка на резюме
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-full m-5 bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl ">
          <div class="lg:flex">
            {/* <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src={image2} alt="" />
            </div> */}
            <div class="p-8 bg-[#ffffff]">
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline bg-[#ffffff]">Обо мне:</a>
              <p class="mt-2 text-slate-500 bg-[#ffffff]">Я студент 3 курса института РТУ МИРЭА. На данный момент рассматриваю должность frontend-разработчика так как имею достаточный опыт по разработке как одностраничных, так и многостраничных сайтов. Стремлюсь всегда к новым вершинам. Если есть необходимость работаю над ошибками и стараюсь их не допускать в будущем. Всегда открыт к обучению и критике. В прошлом закончил художественную школу, имею диплом. Поэтому ко всему стараюсь подойти с творческой стороны.</p>
              <div className='border-b border-gray-200 mt-4'></div>
              <div className='flex bg-[#ffffff]'>
              <a className='bg-white' href="https://github.com/IlinAndrey"><img class="bg-[#ffffff] w-5 mt-4" src={git} /></a>
              <a className='bg-white' href="https://www.instagram.com/wyugxl"><img class="bg-[#ffffff] w-5 mt-4 ml-4" src={inst} /></a>
              </div>
              <p className='bg-[#ffffff] text-violet-500 text-xl font-semibold mt-3 translate-y-3 underline underline-offset-[1.5rem]'>Резюме</p>
            </div>
          </div>
        </div>
      </div>



      <div className='lg:flex justify-center'>
        <div>



          <div class="max-w-full m-5 bg-white rounded-xl shadow-md overflow-hidden h-64 lg:max-w-xl ">
            <div class="">
              <div class="p-8 bg-[#ffffff]">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black bg-[#ffffff]">Информация</a>
                <div className='flex bg-[#ffffff] mb-3 mt-3'>
                  <p class="mt-2 text-gray-400 text-sm bg-[#ffffff]">Город</p>
                  <div className='w-full flex flex-row-reverse bg-[#ffffff]'>
                    <p class="block mt-1 text-md leading-tight font-medium text-gray-700 bg-[#ffffff] inset-y-0 right-0">Москва</p>
                  </div>
                </div>
                <div className='flex bg-[#ffffff] mb-3'>
                  <p class="mt-2 text-gray-400 text-sm bg-[#ffffff]">Опыт</p>
                  <div className='w-full flex flex-row-reverse bg-[#ffffff]'>
                    <p class="block mt-1 text-md leading-tight font-medium text-gray-700 bg-[#ffffff] inset-y-0 right-0">2 года</p>
                  </div>
                </div>
                <div className='flex bg-[#ffffff] mb-3'>
                  <p class="mt-2 text-gray-400 text-sm bg-[#ffffff]">Состояние</p>
                  <div className='w-full flex flex-row-reverse bg-[#ffffff]'>
                    <p class="block mt-1 text-md leading-tight font-medium text-gray-700 bg-[#ffffff] inset-y-0 right-0">В поиске</p>
                  </div>
                </div>
                <div className='flex bg-[#ffffff] mb-3'>
                  <p class="mt-2 text-gray-400 text-sm bg-[#ffffff] mr-12">Заработная плата</p>
                  <div className='w-full flex flex-row-reverse bg-[#ffffff]'>
                    <p class="block mt-1 text-md leading-tight font-medium text-gray-700 bg-[#ffffff] inset-y-0 right-0">80 000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="max-w-full m-5 bg-white rounded-xl shadow-md overflow-hidden h-46 lg:w-[18rem] ">
            <div class="w-46">
              <div class="p-8 bg-[#ffffff]">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black bg-[#ffffff]">Скилы</a>
                <div className='flex bg-white flex-wrap mt-3'>
                  {/* <div className='flex bg-white'> */}
                    <div className='w-12 mr-2 bg-white'>
                      <p className=' px-4 bg-violet-200 rounded-lg text-violet-700 w-auto'>JS</p>
                    </div>
                    <div className='w-20 mr-2 bg-white'>
                      <p className=' px-4 bg-violet-200 rounded-lg text-violet-700 w-auto'>ReactJS</p>
                    </div>
                  {/* </div> */}
                  {/* <div className='flex bg-white'> */}
                    <div className='w-14 mx-2 mb-3 bg-white'>
                      <p className=' px-4 bg-violet-200 rounded-lg text-violet-700 w-auto'>CSS</p>
                    </div>
                    <div className='w-16 mr-2 bg-white'>
                      <p className=' px-4 bg-violet-200 rounded-lg text-violet-700 w-auto'>SCSS</p>
                    </div>
                  {/* </div> */}
                  <div className='w-18 bg-white'>
                    <p className=' px-4 bg-violet-200 rounded-lg text-violet-700 w-auto'>HTML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div>
          <div class="max-w-full m-5 bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl max-h-auto lg:max-h-96 ">
            <div class="flex">
              {/* <div class="md:shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src={image2} alt="" />
              </div> */}
              <div class="p-8 bg-[#ffffff]">
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black bg-[#ffffff]">Опыт работы:</a>
                <div className='my-5 item-section flex bg-white'>
                  <div className='company-logo bg-white mr-5'>
                    <p className='bx bxl-twitter text-3xl bg-white font-bold text-blue-700'>Р</p>
                  </div>
                  <div className='w-full space-y-5 bg-white'>
                    <div className='item-header bg-white flex'>
                      <div className='space-y-1.5 bg-white'>
                        <div className='font-medium bg-white'>Junior Developer</div>
                        <div className='flex space-x-10 bg-white'>
                          <div className='item-header-info bg-white'>
                            <span className='text-xs bg-white text-gray-400'>Москва</span>
                          </div>
                          <div className='item-header-info bg-white'>
                            <span className='text-xs bg-white text-gray-400'>РТУМИРЭА</span>
                          </div>
                        </div>
                      </div>
                      <div className='space-y-2 text-right bg-white w-full flex-row-reverse'>
                        <p className='bg-white text-violet-700'>Full time</p>
                        <div className='bg-white'>
                          <span className='bg-white text-gray-400 text-xs'>2022 - Настоящее</span>
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-600 bg-white'>
                      
                    Главной целью была поставлена задача: Разработать игру для обучения мед-персонала или студентов медицинских вузов.

                    Обязанности которые я выполняю:

                    Создание 3D моделей
                    Текстурирование моделей
                    Написание скриптов для динамики игры
                    Данная работа является не официальной, рассматривается как проектная деятельность в команде.

                    На данный момент разрабатываемый проект рассматривается на грант.
                              
                    </p>
                    {/* <div className='border-b border-gray-200'></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-full m-5 bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl max-h-auto lg:max-h-96 ">
          <div class="flex">
            {/* <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src={image2} alt="" />
            </div> */}
            <div class="p-8 bg-[#ffffff]">
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black bg-[#ffffff]">Обучение:</a>
              <div className='my-5 item-section flex bg-white'>
                <div className='company-logo bg-white mr-5'>
                  <p className='bx bxl-twitter text-3xl bg-white font-bold text-blue-700'>Р</p>
                </div>
                <div className='w-full space-y-5 bg-white'>
                  <div className='item-header bg-white flex'>
                    <div className='space-y-1.5 bg-white'>
                      <div className='font-medium bg-white'>	Программная инженерия (Разработка программных продуктов и проектирование информационных систем)</div>
                      <div className='flex space-x-10 bg-white'>
                        <div className='item-header-info bg-white'>
                          <span className='text-xs bg-white text-gray-400'>Москва</span>
                        </div>
                        <div className='item-header-info bg-white'>
                          <span className='text-xs bg-white text-gray-400'>РТУМИРЭА</span>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-2 text-right bg-white w-full flex-row-reverse'>
                      <p className='bg-white text-violet-700'></p>
                      <div className='bg-white'>
                        <span className='bg-white text-gray-400 text-xs'>2022 - Настоящее</span>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-gray-200'></div>
                </div>
                
              </div>
              <div className='my-5 item-section flex bg-white'>
                <div className='company-logo bg-white mr-5'>
                  <p className='bx bxl-twitter text-3xl bg-white font-bold text-blue-700'>F</p>
                </div>
                <div className='w-full space-y-5 bg-white'>
                  <div className='item-header bg-white flex'>
                    <div className='space-y-1.5 bg-white'>
                      <div className='font-medium bg-white'>Frontend Developer</div>
                      <div className='flex space-x-10 bg-white'>
                        <div className='item-header-info bg-white'>
                          <span className='text-xs bg-white text-gray-400'>Москва</span>
                        </div>
                        <div className='item-header-info bg-white'>
                          <span className='text-xs bg-white text-gray-400'>FreeCodeCamp</span>
                        </div>
                      </div>
                    </div>
                    <div className='space-y-2 text-right bg-white w-full flex-row-reverse'>
                      <p className='bg-white text-violet-700'></p>
                      <div className='bg-white'>
                        <span className='bg-white text-gray-400 text-xs'>Mart 2022 - Apr 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
