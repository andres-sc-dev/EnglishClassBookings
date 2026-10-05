import { createContext, useContext, useMemo,  useState, useEffect, useCallback } from "react";
import asyncStorage from "@react-native-async-storage/async-storage";

const KEY_RESERVATIONS = "@reservations_mj20";

export const ReservationsContext = createContext();

export function ReservationsProvider({children}){
  const [classSeats, setClassSeats]= useState([]);
  const [loading, setLoading] = useState(true);

  //crear funcion para cargar
  useEffect(()=>{
    const load = async () => {
      try {
        const saving = await asyncStorage.getItem(KEY_RESERVATIONS);
        if (saving !== null){
          setClassSeats(JSON.parse(saving));
        }
      }catch(error){
        console.log('ocurrio un error al cargar la informacion', error)
      }finally{
        setLoading(false);

      }
    }
    load();
  },[])

  //Guardar cada vez que cambie el arreglo de reservas
  useEffect(()=>{
  if (loading) return;
  asyncStorage.setItem(KEY_RESERVATIONS, JSON.stringify(classSeats)).catch((error)=>
    console.log('Error guardando reservas: ', error)

  )


},[classSeats, loading]);

const reserveClass = useCallback((course, schedules) => {
  const news = {
    id: course.id + '-' + schedules,
    title: course.title,
    level : course.level,
    teacher: course.teacher.name + ' '+ course.teacher.lastname,
    price: course.price,
    schedules,
    createIn : new Date().toISOString()
  }
  let results = {ok:true};
  setClassSeats((prev)=>{
    //verificar si ya existe la reserva
    const alreadyExists = prev.some((r)=> r.id === news.id);
    if(alreadyExists){
      results = {ok: false}; //si ya existe la reserva no se agrega y avisa
      return prev; //se devuelve el arreglo anterior sin cambios
      }  
        
    return [news, ...prev]
})  
return results;
}, []);

  return (
      <ReservationsContext.Provider value={{ classSeats, reserveClass }}>
        {children}
      </ReservationsContext.Provider>
    );

}//esta llave es la que cierra la funcion de provider

export function useReservations(){
  return useContext(ReservationsContext);
}








