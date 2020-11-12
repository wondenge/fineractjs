

import ApiClient from '../ApiClient';

/**
 * The GetShareReferenceId model module.
 * @module model/GetShareReferenceId
 * @version 1.0
 */
class GetShareReferenceId {
    /**
     * Constructs a new <code>GetShareReferenceId</code>.
     * @alias module:model/GetShareReferenceId
     */
    constructor() { 
        
        GetShareReferenceId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareReferenceId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareReferenceId} obj Optional instance to populate.
     * @return {module:model/GetShareReferenceId} The populated <code>GetShareReferenceId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareReferenceId();

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
GetShareReferenceId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareReferenceId.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetShareReferenceId.prototype['glCode'] = undefined;






export default GetShareReferenceId;

