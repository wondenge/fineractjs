

import ApiClient from '../ApiClient';

/**
 * The GetGroupsGroupIdAccountsSavingCurrency model module.
 * @module model/GetGroupsGroupIdAccountsSavingCurrency
 * @version 1.0
 */
class GetGroupsGroupIdAccountsSavingCurrency {
    /**
     * Constructs a new <code>GetGroupsGroupIdAccountsSavingCurrency</code>.
     * @alias module:model/GetGroupsGroupIdAccountsSavingCurrency
     */
    constructor() { 
        
        GetGroupsGroupIdAccountsSavingCurrency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsGroupIdAccountsSavingCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsGroupIdAccountsSavingCurrency} obj Optional instance to populate.
     * @return {module:model/GetGroupsGroupIdAccountsSavingCurrency} The populated <code>GetGroupsGroupIdAccountsSavingCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsGroupIdAccountsSavingCurrency();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('decimalPlaces')) {
                obj['decimalPlaces'] = ApiClient.convertToType(data['decimalPlaces'], 'Number');
            }
            if (data.hasOwnProperty('displaySymbol')) {
                obj['displaySymbol'] = ApiClient.convertToType(data['displaySymbol'], 'String');
            }
            if (data.hasOwnProperty('nameCode')) {
                obj['nameCode'] = ApiClient.convertToType(data['nameCode'], 'String');
            }
            if (data.hasOwnProperty('displayLabel')) {
                obj['displayLabel'] = ApiClient.convertToType(data['displayLabel'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
GetGroupsGroupIdAccountsSavingCurrency.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetGroupsGroupIdAccountsSavingCurrency.prototype['name'] = undefined;

/**
 * @member {Number} decimalPlaces
 */
GetGroupsGroupIdAccountsSavingCurrency.prototype['decimalPlaces'] = undefined;

/**
 * @member {String} displaySymbol
 */
GetGroupsGroupIdAccountsSavingCurrency.prototype['displaySymbol'] = undefined;

/**
 * @member {String} nameCode
 */
GetGroupsGroupIdAccountsSavingCurrency.prototype['nameCode'] = undefined;

/**
 * @member {String} displayLabel
 */
GetGroupsGroupIdAccountsSavingCurrency.prototype['displayLabel'] = undefined;






export default GetGroupsGroupIdAccountsSavingCurrency;

