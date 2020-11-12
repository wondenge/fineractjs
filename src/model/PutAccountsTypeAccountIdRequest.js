

import ApiClient from '../ApiClient';

/**
 * The PutAccountsTypeAccountIdRequest model module.
 * @module model/PutAccountsTypeAccountIdRequest
 * @version 1.0
 */
class PutAccountsTypeAccountIdRequest {
    /**
     * Constructs a new <code>PutAccountsTypeAccountIdRequest</code>.
     * PutAccountsTypeAccountIdRequest
     * @alias module:model/PutAccountsTypeAccountIdRequest
     */
    constructor() { 
        
        PutAccountsTypeAccountIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountsTypeAccountIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountsTypeAccountIdRequest} obj Optional instance to populate.
     * @return {module:model/PutAccountsTypeAccountIdRequest} The populated <code>PutAccountsTypeAccountIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountsTypeAccountIdRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('applicationDate')) {
                obj['applicationDate'] = ApiClient.convertToType(data['applicationDate'], 'String');
            }
            if (data.hasOwnProperty('requestedShares')) {
                obj['requestedShares'] = ApiClient.convertToType(data['requestedShares'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PutAccountsTypeAccountIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutAccountsTypeAccountIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} applicationDate
 */
PutAccountsTypeAccountIdRequest.prototype['applicationDate'] = undefined;

/**
 * @member {Number} requestedShares
 */
PutAccountsTypeAccountIdRequest.prototype['requestedShares'] = undefined;






export default PutAccountsTypeAccountIdRequest;

