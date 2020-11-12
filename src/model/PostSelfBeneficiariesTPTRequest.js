  

import ApiClient from '../ApiClient';

/**
 * The PostSelfBeneficiariesTPTRequest model module.
 * @module model/PostSelfBeneficiariesTPTRequest
 * @version 1.0
 */
class PostSelfBeneficiariesTPTRequest {
    /**
     * Constructs a new <code>PostSelfBeneficiariesTPTRequest</code>.
     * PostSelfBeneficiariesTPTRequest
     * @alias module:model/PostSelfBeneficiariesTPTRequest
     */
    constructor() { 
        
        PostSelfBeneficiariesTPTRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfBeneficiariesTPTRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfBeneficiariesTPTRequest} obj Optional instance to populate.
     * @return {module:model/PostSelfBeneficiariesTPTRequest} The populated <code>PostSelfBeneficiariesTPTRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfBeneficiariesTPTRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('accountType')) {
                obj['accountType'] = ApiClient.convertToType(data['accountType'], 'Number');
            }
            if (data.hasOwnProperty('transferLimit')) {
                obj['transferLimit'] = ApiClient.convertToType(data['transferLimit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostSelfBeneficiariesTPTRequest.prototype['locale'] = undefined;

/**
 * @member {String} name
 */
PostSelfBeneficiariesTPTRequest.prototype['name'] = undefined;

/**
 * @member {String} officeName
 */
PostSelfBeneficiariesTPTRequest.prototype['officeName'] = undefined;

/**
 * @member {Number} accountNumber
 */
PostSelfBeneficiariesTPTRequest.prototype['accountNumber'] = undefined;

/**
 * @member {Number} accountType
 */
PostSelfBeneficiariesTPTRequest.prototype['accountType'] = undefined;

/**
 * @member {Number} transferLimit
 */
PostSelfBeneficiariesTPTRequest.prototype['transferLimit'] = undefined;






export default PostSelfBeneficiariesTPTRequest;

