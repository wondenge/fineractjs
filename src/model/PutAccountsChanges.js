

import ApiClient from '../ApiClient';

/**
 * The PutAccountsChanges model module.
 * @module model/PutAccountsChanges
 * @version 1.0
 */
class PutAccountsChanges {
    /**
     * Constructs a new <code>PutAccountsChanges</code>.
     * @alias module:model/PutAccountsChanges
     */
    constructor() { 
        
        PutAccountsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountsChanges} obj Optional instance to populate.
     * @return {module:model/PutAccountsChanges} The populated <code>PutAccountsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountsChanges();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('applicationDate')) {
                obj['applicationDate'] = ApiClient.convertToType(data['applicationDate'], 'String');
            }
            if (data.hasOwnProperty('requestedShares')) {
                obj['requestedShares'] = ApiClient.convertToType(data['requestedShares'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PutAccountsChanges.prototype['dateFormat'] = undefined;

/**
 * @member {String} applicationDate
 */
PutAccountsChanges.prototype['applicationDate'] = undefined;

/**
 * @member {Number} requestedShares
 */
PutAccountsChanges.prototype['requestedShares'] = undefined;

/**
 * @member {String} locale
 */
PutAccountsChanges.prototype['locale'] = undefined;






export default PutAccountsChanges;

