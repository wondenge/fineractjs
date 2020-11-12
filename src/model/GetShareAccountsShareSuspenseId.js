

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsShareSuspenseId model module.
 * @module model/GetShareAccountsShareSuspenseId
 * @version 1.0
 */
class GetShareAccountsShareSuspenseId {
    /**
     * Constructs a new <code>GetShareAccountsShareSuspenseId</code>.
     * @alias module:model/GetShareAccountsShareSuspenseId
     */
    constructor() { 
        
        GetShareAccountsShareSuspenseId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsShareSuspenseId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsShareSuspenseId} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsShareSuspenseId} The populated <code>GetShareAccountsShareSuspenseId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsShareSuspenseId();

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
GetShareAccountsShareSuspenseId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareAccountsShareSuspenseId.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetShareAccountsShareSuspenseId.prototype['glCode'] = undefined;






export default GetShareAccountsShareSuspenseId;

