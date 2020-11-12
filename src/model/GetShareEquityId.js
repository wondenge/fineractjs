

import ApiClient from '../ApiClient';

/**
 * The GetShareEquityId model module.
 * @module model/GetShareEquityId
 * @version 1.0
 */
class GetShareEquityId {
    /**
     * Constructs a new <code>GetShareEquityId</code>.
     * @alias module:model/GetShareEquityId
     */
    constructor() { 
        
        GetShareEquityId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareEquityId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareEquityId} obj Optional instance to populate.
     * @return {module:model/GetShareEquityId} The populated <code>GetShareEquityId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareEquityId();

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
GetShareEquityId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareEquityId.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetShareEquityId.prototype['glCode'] = undefined;






export default GetShareEquityId;

