

import ApiClient from '../ApiClient';

/**
 * The GetCentersAccountType model module.
 * @module model/GetCentersAccountType
 * @version 1.0
 */
class GetCentersAccountType {
    /**
     * Constructs a new <code>GetCentersAccountType</code>.
     * @alias module:model/GetCentersAccountType
     */
    constructor() { 
        
        GetCentersAccountType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersAccountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersAccountType} obj Optional instance to populate.
     * @return {module:model/GetCentersAccountType} The populated <code>GetCentersAccountType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersAccountType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCentersAccountType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetCentersAccountType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetCentersAccountType.prototype['description'] = undefined;






export default GetCentersAccountType;

