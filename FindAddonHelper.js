addons.findSelectedAddon = function(availableAddons, addonCode){
	var selectedAddonFromAvailableAddons = $.grep(availableAddons, function (item) {
        return (item.AddonCode == addonCode && item.AddonStatus == 1);
    });

    return selectedAddonFromAvailableAddons;
}

addons.findSelectedTier = function (availableAddons, addonCode) {
    var selectedAddonFromAvailableAddons = addons.findSelectedAddon(availableAddons, addonCode);

    if (selectedAddonFromAvailableAddons.length > 0) {
		var selectedTier = $.grep(selectedAddonFromAvailableAddons[0].AddonTiers, function (item) {
            return (item.AddonStatus == 1);
        });

        return selectedTier;
    }
};

addons.findSelectedTierCode = function(selectedTier){
        if (selectedTier) { 
            return selectedTier[0].PolicySectionCoverLevelTypeId;
        }
}