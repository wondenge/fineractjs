

import ApiClient from '../ApiClient';

/**
 * The PostSelfBeneficiariesTPTResponse model module.
 * @module model/PostSelfBeneficiariesTPTResponse
 * @version 1.0
 */
class PostSelfBeneficiariesTPTResponse {
    /**
     * Constructs a new <code>PostSelfBeneficiariesTPTResponse</code>.
     * PostSelfBeneficiariesTPTResponse
     * @alias module:model/PostSelfBeneficiariesTPTResponse
     */
    constructor() { 
        
        PostSelfBeneficiariesTPTResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfBeneficiariesTPTResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfBeneficiariesTPTResponse} obj Optional instance to populate.
     * @return {module:model/PostSelfBeneficiariesTPTResponse} The populated <code>PostSelfBeneficiariesTPTResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfBeneficiariesTPTResponse();

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
PostSelfBeneficiariesTPTResponse.prototype['resourceId'] = undefined;






export default PostSelfBeneficiariesTPTResponse;

