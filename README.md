<!-- PROJECT LOGO -->
<br />
<div align="center" id="readme-top">
  <a href="https://github.com/sameteyuboglu/react-usestate-useref-axios-json-server">
    <img src="src/assets/react.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">REACT BOOKs </h3>

  <p align="center">
    Routing , Nested Routing , useState , useParams , useSearchParams , useEffect , useLocation , useNavigate , axios, json server
  </p>
</div>

## Başlangıç

React ile birlikte Routing , Nested Routing , useState , useParams , useSearchParams , useEffect , useLocation , useNavigate , axios, json server kullanımı için gerekli kurulumlar

### Kurulumlar

```sh
npm create vite@latest
```

```sh
npm i react-router-dom
```

```sh
npm install axios
```

```sh
npm install -g json-server
```

## Kullanımlar

Projemizi

```
npm create vite@latest react-router-dom --template react
```

```sh
cd react-router-dom
code .
```

ile oluşturuyoruz sonrasında projemizinde kullanacağımız axios'un kurulumunu yapıyoruz

```sh
npm install axios
```

routing elemanlarını kullanmak için react-router-dom

```sh
npm i react-router-dom
```

proje root'unda olan db.json dosyamızı ayağa kaldırıyoruz

```
json-server --watch db.json --port 3030
```

sonra projemizi ayağa kaldırıyoruz

```sh
npm run dev
```

<p align="right">(<a href="#readme-top">Başa Dön</a>)</p>



## Kullanaım Örnekleri

## UseEffect , Axios 
```
useEffect(() => {
    const options = {
      params: {
        _sort: "title",
        _order: order === "a-Z" ? "asc" : "desc",
        category: category,
      },
    };
    axios.get(`http://localhost:3090/books`, options).then((res) => {
      setBooks(res.data);
    });
  }, [order]);
```
## useSearchParams

```
  /*url deki search params lara erişmek için*/
 const [searchParams, setSearchParams] = useSearchParams("");

 /*url e search params eklemek için */
  setSearchParams({ sort: e.target.value });
```

## useNavigate

```
  const navigate = useNavigate();
  
  /*Navigate ile url'e parametreli bir şekilde yönlendirme*/
  navigate("/not-found", { state: err.response.status })
```

# useParams

```
  

  /*Route da tanımlanmış olan parametrelere erişme*/
  const { id } = useParams();

  /*Örnek route*/
  <Route path="/products/detail/:id" element={<ProductDetail />} />
```


## BrowserRouter

```
   <BrowserRouter>
      <Header />/*Url değişsede standart olarak üst kısımda gözükecek*/
      <Routes>
        <Route path="/" element={<MainPage />} />/*default route*/
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />/*parametreli route tanımlama*/
        
        <Route path="/categories" element={<Layout />}> /*Nested route*/
          <Route index element={<History/>}></Route>/*index tanımlaması categories e erişmeye çalışan kişilerin outlet üzerinden ilk görüntüleceği route*/
          <Route path="story" element={<Story/>}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route> /*Eğer erişmeye çalışılan route tanımlı değilse son olarak path="*" olan route a yönlendirilir en son tanımlanmalıdır */
      </Routes>
      <Footer />/*Url değişsede standart olarak alt kısımda gözükecek*/
    </BrowserRouter>
```


# nested routelar ile outlet kullanımı

Üst kısımda tanımlanmış olan "categories" route içerisine girildiğinde aşağıdaki bölüm çalışmaktadır 

```
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Categories</h1>
      <div
        style={{ minHeight: "85vh" }}
        className="d-flex align-items-center gap-4"
      >
        <aside className="bg-white p-5 rounded d-flex flex-column gap-5 text-black">
          <NavLink
            className="text-black text-decoration-none nav-link"
            to={"/categories"}
          >
            History
          </NavLink>
          <NavLink
            className="text-black text-decoration-none nav-link"
            to={"/categories/story"}
          >
            Story
          </NavLink>
        </aside>

        <Outlet />/*Tıklanan NavLinklerin içeriklerinin açılacağı alan*/
      </div>
    </>
  );
};

export default Layout;

```


- [ x ] create Project
- [ x ] create Json Server
- [ x ] install Bootstrap
- [ x ] React Routing
- [ x ] React Nested Routing
- [ x ] React useState
- [ x ] React useParams
- [ x ] React useSearchParams
- [ x ] React useEffect
- [ x ] React useLocation
- [ x ] React useNavigate
- [ x ] axios
- [ x ] json server


<p align="right">(<a href="#readme-top">Başa Dön</a>)</p>


## Son Durum
![](screen.gif)
