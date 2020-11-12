

import ApiClient from '../ApiClient';

/**
 * The GetCentersStaffOptions model module.
 * @module model/GetCentersStaffOptions
 * @version 1.0
 */
class GetCentersStaffOptions {
    /**
     * Constructs a new <code>GetCentersStaffOptions</code>.
     * @alias module:model/GetCentersStaffOptions
     */
    constructor() { 
        
        GetCentersStaffOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersStaffOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersStaffOptions} obj Optional instance to populate.
     * @return {module:model/GetCentersStaffOptions} The populated <code>GetCentersStaffOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersStaffOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCentersStaffOptions.prototype['id'] = undefined;

/**
 * @member {String} displayName
 */
GetCentersStaffOptions.prototype['displayName'] = undefined;






export default GetCentersStaffOptions;

