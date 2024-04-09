import { toast } from "react-toastify";
import { apiConnector } from "../connector";



export async function addPlayer(name, number , tournamentID , teamID){
  const toastId = toast.loading("Loading...")
  try{
   
    const response = await apiConnector(
      "POST",
      "http://localhost:4000/admin/tournament/addplayer",{name, number , tournamentID , teamID}
    );
  
   if(!response.data.success){
    throw new Error(response.data.msg);
   }
   toast.dismiss(toastId);
   toast.success("Player Added");

  }catch(error){

    toast.error(error.msg)
    console.log(error)
    toast.error("Could Get Your Tournament");

  }

  toast.dismiss(toastId);
}


export async function findPlayer(setLoading,setPlayers,teamID){
  try{
    setLoading(true);
    const response = await apiConnector(
      "GET",
      `http://localhost:4000/admin/tournament/findmyplayer?teamID=${teamID}`,
    );
  
   if(!response.data.success){
    setLoading(false);
    throw new Error(response.data.msg);
   }

   if(response.data.success){
    console.log(response.data.data)
    setPlayers(response.data.data) ;
   }
    setLoading(false);
  }catch(error){
    setLoading(false);
    toast.error("Could Get Your Players");
  }

}





export async function findAllPLayerOfMatch(setLoading,setTeamA,setTeamB,matchID){
  try{
    setLoading(true);
    const response = await apiConnector(
      "GET",
      `http://localhost:4000/admin/tournament/findtotalplayer?matchid=${matchID}`,
    );
  
   if(!response.data.success){
    setLoading(false);
    throw new Error(response.data.msg);
   }

   if(response.data.success){
    setTeamA(response.data.teamAplayers);
    setTeamB(response.data.teamBplayers);
   }
    setLoading(false);
  }catch(error){
    setLoading(false);
    toast.error("Could Get Your Players");
  }

}