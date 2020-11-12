

import ApiClient from '../ApiClient';

/**
 * The GetCentersStatus model module.
 * @module model/GetCentersStatus
 * @version 1.0
 */
class GetCentersStatus {
    /**
     * Constructs a new <code>GetCentersStatus</code>.
     * @alias module:model/GetCentersStatus
     */
    constructor() { 
        
        GetCentersStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersStatus} obj Optional instance to populate.
     * @return {module:model/GetCentersStatus} The populated <code>GetCentersStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersStatus();

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
GetCentersStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetCentersStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetCentersStatus.prototype['description'] = undefined;






export default GetCentersStatus;

