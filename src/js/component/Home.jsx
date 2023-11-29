import React, { useState, useContext, useEffect,  } from 'react';
import { useParams, Link } from "react-router-dom"
import { Context } from '../store/appContext';
import {Caracteres} from '../views/Caracteres.jsx'
import {Planetas} from '../views/Planetas.jsx'
import { Vehiculos  } from '../views/Vehiculos.jsx'


export const Home = () =>{
    const { store } = useContext(Context);
    const [favoritos, setFavoritos] = useState(store.favoritos);

    useEffect(() => {
      setFavoritos(store.favoritos);
    }, [favoritos]);


    return (
        <>
        <Caracteres></Caracteres>
        <Planetas></Planetas>
        <Vehiculos></Vehiculos>
        </>

    )
} 