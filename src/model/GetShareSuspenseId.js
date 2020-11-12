

import ApiClient from '../ApiClient';

/**
 * The GetShareSuspenseId model module.
 * @module model/GetShareSuspenseId
 * @version 1.0
 */
class GetShareSuspenseId {
    /**
     * Constructs a new <code>GetShareSuspenseId</code>.
     * @alias module:model/GetShareSuspenseId
     */
    constructor() { 
        
        GetShareSuspenseId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareSuspenseId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareSuspenseId} obj Optional instance to populate.
     * @return {module:model/GetShareSuspenseId} The populated <code>GetShareSuspenseId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareSuspenseId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetShareSuspenseId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareSuspenseId.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetShareSuspenseId.prototype['glCode'] = undefined;






export default GetShareSuspenseId;

