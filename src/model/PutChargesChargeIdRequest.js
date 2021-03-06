

import ApiClient from '../ApiClient';

/**
 * The PutChargesChargeIdRequest model module.
 * @module model/PutChargesChargeIdRequest
 * @version 1.0
 */
class PutChargesChargeIdRequest {
    /**
     * Constructs a new <code>PutChargesChargeIdRequest</code>.
     * PutChargesChargeIdRequest
     * @alias module:model/PutChargesChargeIdRequest
     */
    constructor() { 
        
        PutChargesChargeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutChargesChargeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutChargesChargeIdRequest} obj Optional instance to populate.
     * @return {module:model/PutChargesChargeIdRequest} The populated <code>PutChargesChargeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutChargesChargeIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutChargesChargeIdRequest.prototype['name'] = undefined;






export default PutChargesChargeIdRequest;

