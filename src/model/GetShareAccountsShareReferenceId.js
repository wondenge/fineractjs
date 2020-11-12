

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsShareReferenceId model module.
 * @module model/GetShareAccountsShareReferenceId
 * @version 1.0
 */
class GetShareAccountsShareReferenceId {
    /**
     * Constructs a new <code>GetShareAccountsShareReferenceId</code>.
     * @alias module:model/GetShareAccountsShareReferenceId
     */
    constructor() { 
        
        GetShareAccountsShareReferenceId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsShareReferenceId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsShareReferenceId} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsShareReferenceId} The populated <code>GetShareAccountsShareReferenceId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsShareReferenceId();

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
GetShareAccountsShareReferenceId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareAccountsShareReferenceId.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetShareAccountsShareReferenceId.prototype['glCode'] = undefined;






export default GetShareAccountsShareReferenceId;

