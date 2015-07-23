
addons.computeBreakDownCoverSelectedTier = function (availableAddons) {
    var selectedTier = addons.findSelectedTier(availableAddons, "PCD");
    return addons.findSelectedTierCode(selectedTier);
};

addons.computeGuaranteedReplacementSelectedTier = function (availableAddons) {
    var selectedTier = addons.findSelectedTier(availableAddons, "PCH");
    return addons.findSelectedTierCode(selectedTier);
};

addons.computeExcessProtectionSelectedTier = function (availableAddons) {
    var selectedTier = addons.findSelectedTier(availableAddons, "PCX");
    return addons.findSelectedTierCode(selectedTier);
};

addons.computeKeyCareSelectedTier = function (availableAddons) {
    return addons.computeSelectedAddonCodeForNonTieredAddons(availableAddons, "PCK");
};

addons.computeLegalProtectionSelectedAddon = function (availableAddons) {
    return addons.computeSelectedAddonCodeForNonTieredAddons(availableAddons, "PCL");
};


addons.computeSelectedAddonCodeForNonTieredAddons = function(availableAddons, addonCode){
	var addon = addons.findSelectedAddon(availableAddons, addonCode);

	if (addon.length > 0)
	{
		return addon[0].AddonCode;
	}
}

addons.ComputeIfCurrentTierIsCheaperThanTheSelectedTier = function (addonTierCode, availableAddons)
{

}