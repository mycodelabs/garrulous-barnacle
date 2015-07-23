addons.DetermineIfTheAddonIsAlreadyIncluded = function(addonTierCode, availableAddons)
{
	var addonCode = addonTierCode.substring(0, 3);
	var addonTier = addons.findSelectedTier(availableAddons, addonCode);

	if (addonTier && addonTier.length > 0){
		var selectedAddonTierCode = addons.findSelectedTierCode(addonTier);
		return selectedAddonTierCode == addonTierCode;    		
	}
	else{
		var selectedAddon = addons.findSelectedAddon(availableAddons, addonCode);
		if (selectedAddon && selectedAddon.length > 0)
			return selectedAddon[0].AddonCode == addonCode;
	}

	return false;
}