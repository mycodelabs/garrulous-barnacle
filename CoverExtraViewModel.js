addons.coverExtraViewModel = function (availableAddons) {

    var self = this;

    self.AvailableAddons = ko.observableArray(availableAddons);
    self.OriginalAddons = ko.observableArray(availableAddons);
    
    self.BreakDownTier = ko.observable();
    self.GuaranteedReplacementTier = ko.observable();
    self.ExcessProtectionTier = ko.observable();
    self.KeyCareTier = ko.observable();
    self.LegalProtection = ko.observable();

    self.AlreadyIncludedBreakdownTier = ko.observable();

    self.SelectedBreakDownCoverTier = ko.computed(function () {
    	var selectedTier = addons.computeBreakDownCoverSelectedTier(self.AvailableAddons());
        self.BreakDownTier(selectedTier);
        self.AlreadyIncludedBreakdownTier(selectedTier);
    }, self);

    self.SelectedGuaranteedReplacementAddonTier = ko.computed(function () {
        self.GuaranteedReplacementTier(addons.computeGuaranteedReplacementSelectedTier(self.AvailableAddons()));
    });

    self.SelectedExcessProtectionTier = ko.computed(function () {
        self.ExcessProtectionTier(addons.computeExcessProtectionSelectedTier(self.AvailableAddons()));
    });   

    self.SelectedKeyCareTier = ko.computed(function () {
        self.KeyCareTier(addons.computeKeyCareSelectedTier(self.AvailableAddons()));
    });   

    self.SelectedLegalProtection = ko.computed(function () {
        self.LegalProtection(addons.computeLegalProtectionSelectedAddon(self.AvailableAddons()));
    });   

    self.showRemove = function(addonTierCode){
    	return false;
    };

    self.showSelect = function(addonTierCode, isInvokedByUserSelection){
		if (!addons.DetermineIfTheAddonIsAlreadyIncluded(addonTierCode, self.AvailableAddons()) && !isInvokedByUserSelection) 
    		return true;
		return false;
    };

    self.showIncluded = function(addonTierCode){
    	return addons.DetermineIfTheAddonIsAlreadyIncluded(addonTierCode, self.AvailableAddons());
    };
};