/*
	*******************************************************************************
	R3ditor V2 - debug.js
	By TheMitoSan

	This file is only used for debugging process and can't be included on R3V2 
	compiler!
	*******************************************************************************
*/
// Reload App without closing main window
R3_SYSTEM.reload = function(){
	R3_DISC_clearActivity();
	if (RE3_RUNNING === true){
		R3_killExternalSoftware(RE3_PID);
	};
	if (R3_WEBMODE !== true){
		localStorage.clear();
		sessionStorage.clear();
	};
	location.reload(true);
};