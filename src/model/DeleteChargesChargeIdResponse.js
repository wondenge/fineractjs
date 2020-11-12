

import ApiClient from '../ApiClient';

/**
 * The DeleteChargesChargeIdResponse model module.
 * @module model/DeleteChargesChargeIdResponse
 * @version 1.0
 */
class DeleteChargesChargeIdResponse {
    /**
     * Constructs a new <code>DeleteChargesChargeIdResponse</code>.
     * DeleteChargesChargeIdResponse
     * @alias module:model/DeleteChargesChargeIdResponse
     */
    constructor() { 
        
        DeleteChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteChargesChargeIdResponse} The populated <code>DeleteChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteChargesChargeIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteChargesChargeIdResponse.prototype['resourceId'] = undefined;






export default DeleteChargesChargeIdResponse;

