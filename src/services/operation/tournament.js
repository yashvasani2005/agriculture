import { toast } from "react-toastify";

import { apiConnector } from "../connector";
import { logout } from './authApi';
import { setTeams , setLoading} from '../../slices/match';


export function addtournament(data,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {

        const response = await apiConnector(
            "POST",
            "http://localhost:4000/admin/tournament/addtournament",
            data
          );

      if (!response.data.success) {
        if(response.data.msg==="Token Not Found"){
          toast.dismiss(toastId)
          navigate("/");
          dispatch(logout());
        }
        throw new Error(response.data.msg);
      }

      toast.dismiss(toastId)
      toast.success("Tournament Created");
      navigate('/admin/mytournaments');
    } catch (error) {
      toast.dismiss(toastId)
      console.log("Error At Services");
      console.log(error)
      toast.error("Could Not created tournament");
    }
    
  };
}

export async function findMyTournament(setUserTournaments,setLoading){
    try{
      setLoading(true);
      const response = await apiConnector(
        "GET",
        "http://localhost:4000/admin/tournament/gettournamentforuser"
      );
    
     if(!response.data.success){
      setUserTournaments(response) ;
      setLoading(false);
      throw new Error(response.data.msg);
     }

     if(response.data.success){
      setUserTournaments(response.data.result) ;
     }
      setLoading(false);
    }catch(error){
      setLoading(false);
      console.log(error)
      toast.error("Could Get Your Tournament");
    }
  
}

export async function findAllTournaments(setTournaments , setLoading){
  try{
    const response = await apiConnector(
      "GET",
      "http://localhost:4000/admin/tournament/getalltournaments"
    );
  
   if(!response.data.success){
    setTournaments(response) ;
    setLoading(false);
    throw new Error(response.data.msg);
   }

   if(response.data.success){
    setTournaments(response.data.result) ;
   }
    setLoading(false);
  }catch(error){
    console.log(error)
    toast.error("Could Get Your Tournament");
  }
}

export async function addTeam(teamName, cityName,tournamentId){
  const toastId = toast.loading("Loading...")
  try{
   
    const response = await apiConnector(
      "POST",
      "http://localhost:4000/admin/tournament/addteam",{teamName, cityName,tournamentId}
    );
  
   if(!response.data.success){
    throw new Error(response.data.msg);
   }
   toast.dismiss(toastId);
   toast.success("Team Added");

  }catch(error){

    toast.error(error.msg)
    console.log(error)
    toast.error("Could Get Your Tournament");

  }

  toast.dismiss(toastId);
}


export async function findMyTeam(tournamentID,setMyTeam,setLoadingw){
    try{
      setLoadingw(true);
      const response = await apiConnector(
        "GET",
        `http://localhost:4000/admin/tournament/myteams?tournamentId=${tournamentID}`,
      );
    
     if(!response.data.success){
      setLoadingw(false);
      throw new Error(response.data.msg);
     }
  
     if(response.data.success){
      setMyTeam(response.data.result) ;
     }
      setLoadingw(false);
    }catch(error){
      setLoadingw(false);
      toast.error("Could Get Your Tournament");
    }

}




export function findMyTeamDisptach(tournamentID) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "GET",
        `http://localhost:4000/admin/tournament/myteams?tournamentId=${tournamentID}`
      );

      if (!response.data.success) {
        throw new Error(response.data.msg);
      }

      if (response.data.success) {
        dispatch(setTeams(response.data.result));
      }
    } catch (error) {
      toast.error("Could Get Your Tournament");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export async function registerMatch(teamAID , teamBID,teamAName,teamBName,noOfOvers, oversPerBowler, city,ground,date,time,tournamentID){
  try{
    
    const response = await apiConnector(
      "POST",
      `http://localhost:4000/admin/tournament/addmatch`,{
        teamAID , teamBID,teamAName,teamBName,noOfOvers, oversPerBowler, city, ground,date,time,tournamentID
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.msg);
    }

    if (response.data.success) {
      toast.success("Match Registred")
    }
  }catch(error){
    toast.error("Match Not Created")
  }
}

export async function getMyMatches(tournamentID , setLoading , setData) {
  setLoading(true);
  try {

    const response = await apiConnector(
      "GET",
      `http://localhost:4000/admin/tournament/getmymatches?tournamentid=${tournamentID}`
    );

    if (!response.data.success) {
      throw new Error(response.data.msg);
    }

    if (response.data.success) {
      setData(response.data.data)
    }

  } catch (error) {
    toast.error("Can not Able to Fetch Matches");
  }
  setLoading(false);
}


export async function findMatch(tournamentID,setLoading,setData){
  try{
    setLoading(true);
    const response = await apiConnector(
      "GET",
      `http://localhost:4000/public/matches?tournamentid=${tournamentID}`,
    );
  
   if(!response.data.success){
    setLoading(false);
    throw new Error(response.data.msg);
   }

   if(response.data.success){
    setData(response.data.data) ;
   }
    setLoading(false);
  }catch(error){
    setLoading(false);
    toast.error("Could Get Matches");
  }

}


export async function addPlaying11(matchID,teamAPlaying , teamBPlaying , navigate){
  const toastId = toast.loading("Loading");
  try{
    
    const response = await apiConnector(
      "POST",
      `http://localhost:4000/admin/tournament/addplaying11`,
      {matchID,teamAPlaying, teamBPlaying}
    );
    if(!response.data.success){
      throw new Error(response.data.msg);
     }
     if(response.data.success){
      navigate(-1)
      toast.success("Player Set")
     }
  }catch(error){
    setLoading(false);
    toast.error("Could Set Player");
  }
  toast.dismiss(toastId);
}