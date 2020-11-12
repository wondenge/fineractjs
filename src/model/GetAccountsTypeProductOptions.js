

import ApiClient from '../ApiClient';

/**
 * The GetAccountsTypeProductOptions model module.
 * @module model/GetAccountsTypeProductOptions
 * @version 1.0
 */
class GetAccountsTypeProductOptions {
    /**
     * Constructs a new <code>GetAccountsTypeProductOptions</code>.
     * @alias module:model/GetAccountsTypeProductOptions
     */
    constructor() { 
        
        GetAccountsTypeProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeProductOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeProductOptions} The populated <code>GetAccountsTypeProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeProductOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('totalShares')) {
                obj['totalShares'] = ApiClient.convertToType(data['totalShares'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsTypeProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetAccountsTypeProductOptions.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetAccountsTypeProductOptions.prototype['shortName'] = undefined;

/**
 * @member {Number} totalShares
 */
GetAccountsTypeProductOptions.prototype['totalShares'] = undefined;






export default GetAccountsTypeProductOptions;

