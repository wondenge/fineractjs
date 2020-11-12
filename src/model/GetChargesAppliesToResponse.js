

import ApiClient from '../ApiClient';

/**
 * The GetChargesAppliesToResponse model module.
 * @module model/GetChargesAppliesToResponse
 * @version 1.0
 */
class GetChargesAppliesToResponse {
    /**
     * Constructs a new <code>GetChargesAppliesToResponse</code>.
     * @alias module:model/GetChargesAppliesToResponse
     */
    constructor() { 
        
        GetChargesAppliesToResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesAppliesToResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesAppliesToResponse} obj Optional instance to populate.
     * @return {module:model/GetChargesAppliesToResponse} The populated <code>GetChargesAppliesToResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesAppliesToResponse();

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
GetChargesAppliesToResponse.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargesAppliesToResponse.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargesAppliesToResponse.prototype['description'] = undefined;






export default GetChargesAppliesToResponse;

