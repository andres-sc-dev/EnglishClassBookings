import { createContext, useContext, useMemo,  useState, useEffect, useCallback } from "react";
import asyncStorage from "@react-native-async-storage/async-storage";
import { CLASSES } from "../data/classes";

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
    courseId: course.id,
    title: course.title,
    level : course.level,
    teacher: course.teacher,
    price: course.price,
    schedules,
    createIn : new Date().toISOString()
    
  }
  let results = {ok:true};
  if (classSeats.some((r)=> r.id === news.id)) return {ok: false, reason: 'duplicate'}; //misma clase y mismo horario
  if (classSeats.some((r)=> r.schedules === schedules)) return {ok: false, reason: 'schedule'}; //horario ya ocupado por otra reserva
  if (classSeats.filter((r)=> r.courseId === course.id).length >= course.spots) return {ok: false, reason: 'full'}; //sin cupos
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
}, [classSeats]);

const cancelReservation = useCallback((id) => {
  setClassSeats((prev) => prev.filter((r) => r.id !== id));
}, []);

  return (
      <ReservationsContext.Provider value={{ classSeats, reserveClass, cancelReservation }}>
        {children}
      </ReservationsContext.Provider>
    );

}//esta llave es la que cierra la funcion de provider

export function useReservations(){
  return useContext(ReservationsContext);
}








