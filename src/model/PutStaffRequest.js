  

import ApiClient from '../ApiClient';

/**
 * The PutStaffRequest model module.
 * @module model/PutStaffRequest
 * @version 1.0
 */
class PutStaffRequest {
    /**
     * Constructs a new <code>PutStaffRequest</code>.
     * PutStaffRequest
     * @alias module:model/PutStaffRequest
     */
    constructor() { 
        
        PutStaffRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutStaffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutStaffRequest} obj Optional instance to populate.
     * @return {module:model/PutStaffRequest} The populated <code>PutStaffRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutStaffRequest();

            if (data.hasOwnProperty('isLoanOfficer')) {
                obj['isLoanOfficer'] = ApiClient.convertToType(data['isLoanOfficer'], 'Boolean');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isLoanOfficer
 */
PutStaffRequest.prototype['isLoanOfficer'] = undefined;

/**
 * @member {String} externalId
 */
PutStaffRequest.prototype['externalId'] = undefined;






export default PutStaffRequest;

