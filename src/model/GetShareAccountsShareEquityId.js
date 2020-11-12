

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsShareEquityId model module.
 * @module model/GetShareAccountsShareEquityId
 * @version 1.0
 */
class GetShareAccountsShareEquityId {
    /**
     * Constructs a new <code>GetShareAccountsShareEquityId</code>.
     * @alias module:model/GetShareAccountsShareEquityId
     */
    constructor() { 
        
        GetShareAccountsShareEquityId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsShareEquityId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsShareEquityId} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsShareEquityId} The populated <code>GetShareAccountsShareEquityId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsShareEquityId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetShareAccountsShareEquityId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareAccountsShareEquityId.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetShareAccountsShareEquityId.prototype['glCode'] = undefined;






export default GetShareAccountsShareEquityId;

